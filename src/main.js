// Add these imports at the top
    import VideoProcessor from './videoProcessor.js'
    import GameAnalyzer from './ai/GameAnalyzer.js'
    import AnalyticsEngine from './analytics/AnalyticsEngine.js'
    import PerformanceMonitor from './utils/PerformanceMonitor.js'
    import config from '../config/default.json'

    // Add these to your main process
    const videoProcessor = new VideoProcessor()
    const gameAnalyzer = new GameAnalyzer(config.ai.modelPath)
    const analyticsEngine = new AnalyticsEngine()
    const performanceMonitor = new PerformanceMonitor()

    // Initialize AI when app starts
    app.whenReady().then(async () => {
      await gameAnalyzer.initialize()
      performanceMonitor.startMonitoring(config.analytics.performanceInterval)
      createWindow()
    })
