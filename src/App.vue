<template>
      <div class="container">
        <h1>AI Gaming Copilot</h1>
        <div class="controls">
          <input v-model="streamUrl" placeholder="Enter Twitch stream URL" />
          <button @click="startAnalysis">Start Analysis</button>
          <button @click="stopAnalysis">Stop Analysis</button>
        </div>
        <div class="stats">
          <h2>Performance Stats</h2>
          <pre>{{ performanceStats }}</pre>
        </div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          streamUrl: '',
          performanceStats: {}
        }
      },
      methods: {
        async startAnalysis() {
          this.performanceStats = await window.electronAPI.startAnalysis(this.streamUrl)
        },
        async stopAnalysis() {
          this.performanceStats = await window.electronAPI.stopAnalysis()
        }
      }
    }
    </script>

    <style>
    .container {
      padding: 20px;
    }
    .controls {
      margin-bottom: 20px;
    }
    input {
      margin-right: 10px;
      padding: 5px;
    }
    </style>
