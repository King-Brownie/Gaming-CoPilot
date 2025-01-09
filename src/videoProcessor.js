import ffmpeg from 'fluent-ffmpeg'
    import { createWriteStream } from 'fs'
    import { pipeline } from 'stream/promises'

    class VideoProcessor {
      constructor() {
        this.process = null
      }

      async processStream(streamUrl, outputPath) {
        return new Promise((resolve, reject) => {
          this.process = ffmpeg(streamUrl)
            .output(outputPath)
            .videoCodec('libx264')
            .audioCodec('aac')
            .on('end', () => resolve(outputPath))
            .on('error', (err) => reject(err))
            .run()
        })
      }

      stopProcessing() {
        if (this.process) {
          this.process.kill('SIGTERM')
        }
      }
    }

    export default VideoProcessor
