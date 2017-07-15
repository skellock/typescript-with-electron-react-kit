import { app } from 'electron'
import { createWindow } from './create-window'

// usually we'd just use __dirname here, however, the FuseBox
// bundler rewrites that, so we have to get it from Electron.
const appPath = app.getAppPath()

// fires when Electron is ready to start
app.on('ready', () => createWindow(appPath))

// fires when all windows are closed
app.on('window-all-closed', app.quit)
