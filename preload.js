const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  pasteImage: () => ipcRenderer.invoke('paste-image'),
  copyToClipboard: (dataUrl) => ipcRenderer.invoke('copy-to-clipboard', dataUrl),
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window')
})