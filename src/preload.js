const { contextBridge, ipcRenderer } = require('electron')

    contextBridge.exposeInMainWorld('electronAPI', {
      startAnalysis: (streamUrl) => ipcRenderer.invoke('start-analysis', streamUrl),
      stopAnalysis: () => ipcRenderer.invoke('stop-analysis'),
      getPerformanceStats: () => ipcRenderer.invoke('get-performance-stats')
    })
