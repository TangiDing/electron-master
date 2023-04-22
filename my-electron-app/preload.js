const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  env: () => process.versions.env,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  node: () => process.versions.node,
  ping: () => ipcRenderer.invoke('ping')
})