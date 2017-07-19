import { app } from 'electron'
import { createMainWindow } from './main-window/main-window'
import * as log from 'electron-log'
import * as isDev from 'electron-is-dev'
import { createUpdater } from './updater/updater'
import { createMenu } from './menu/menu'

// set proper logging level
log.transports.file.level = isDev ? false : 'info'
log.transports.console.level = isDev ? 'debug' : false

// usually we'd just use __dirname here, however, the FuseBox
// bundler rewrites that, so we have to get it from Electron.
const appPath = app.getAppPath()

// fires when Electron is ready to start
app.on('ready', () => {
  const window = createMainWindow(appPath)
  createMenu(window)
})

// fires when all windows are closed
app.on('window-all-closed', app.quit)

// setup the auto-updater
createUpdater(app)
