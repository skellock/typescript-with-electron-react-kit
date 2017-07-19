import { app } from 'electron'
import { createWindow } from './create-window'
import * as log from 'electron-log'
import * as isDev from 'electron-is-dev'
import { setupAutoUpdates } from './auto-updater'
import { setupMenu } from './menu/menu'

// set proper logging level
log.transports.file.level = isDev ? false : 'info'
log.transports.console.level = isDev ? 'debug' : false

// usually we'd just use __dirname here, however, the FuseBox
// bundler rewrites that, so we have to get it from Electron.
const appPath = app.getAppPath()

// fires when Electron is ready to start
app.on('ready', () => {
  const window = createWindow(appPath)
  setupMenu(window)
})

// fires when all windows are closed
app.on('window-all-closed', app.quit)

// setup the auto-updater
setupAutoUpdates(app)
