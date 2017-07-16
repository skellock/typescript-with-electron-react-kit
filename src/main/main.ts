import { app } from 'electron'
import { createWindow } from './create-window'
import * as log from 'electron-log'
import * as isDev from 'electron-is-dev'
import { setupAutoUpdates } from './auto-updater'
// set proper logging level
log.transports.file.level = isDev ? 'error' : 'debug'

// usually we'd just use __dirname here, however, the FuseBox
// bundler rewrites that, so we have to get it from Electron.
const appPath = app.getAppPath()

// fires when Electron is ready to start
app.on('ready', () => {
  createWindow(appPath)
})

// fires when all windows are closed
app.on('window-all-closed', app.quit)

// setup the auto-updater
setupAutoUpdates(app)