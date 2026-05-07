const { app, BrowserWindow, ipcMain, clipboard, nativeImage } = require('electron')
const path = require('path')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1020,
    height: 810,
    minWidth: 820,
    minHeight: 680,
    frame: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  // 完全移除菜单栏
  win.setMenu(null)

  win.loadFile('index.html')
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

ipcMain.handle('paste-image', () => {
  const img = clipboard.readImage()
  if (img.isEmpty()) return null
  return img.toDataURL()
})

ipcMain.handle('copy-to-clipboard', (e, dataUrl) => {
  const img = nativeImage.createFromDataURL(dataUrl)
  clipboard.writeImage(img)
})

app.on('window-all-closed', () => app.quit())

// 窗口控制
ipcMain.handle('minimize-window', () => {
  if (win) win.minimize()
})

ipcMain.handle('maximize-window', () => {
  if (win) {
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  }
})

ipcMain.handle('close-window', () => {
  if (win) win.close()
})