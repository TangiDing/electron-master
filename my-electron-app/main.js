const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  })
  ipcMain.handle("ping", () => {
    return "pong"
  })
  win.loadFile("./index.html");
}

app.whenReady().then(() => {
  createWindow();
})
