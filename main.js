const { app, BrowserWindow } = require('electron');
const {ipcMain} = require('electron')
ipcMain.on('resize-me-please', (event, size) => {
    win.setContentSize(size.width * 50, size.height * 50)
});

function createWindow () {
    win = new BrowserWindow({ width: 800, height: 600, resizable: true });
    win.loadFile('index.html')
}
app.on('window-all-closed', app.quit);
app.on('ready', createWindow);