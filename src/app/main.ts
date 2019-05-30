// This is the main process entry point. It is the
// first file that is run on startup.
//
// It is responsible for launching a renderer window.

import { app, dialog, ipcMain } from "electron"
import { createMainWindow, loadURL } from "../main-window"
import * as log from "electron-log"
import * as isDev from "electron-is-dev"
import { createUpdater } from "../lib/updater"
import { createMenu } from "../menu"

// set proper logging level
log.transports.file.level = isDev ? false : "info"
log.transports.console.level = isDev ? "debug" : false

let window: Electron.BrowserWindow
let showStorybook = false

// usually we'd just use __dirname here, however, the FuseBox
// bundler rewrites that, so we have to get it from Electron.
const appPath = app.getAppPath()

// fires when Electron is ready to start
app.on("ready", () => {
  window = createMainWindow(appPath)
  createMenu(window)

  if (isDev) {
    window.webContents.on("did-fail-load", () => {
      dialog.showErrorBox(
        "Error opening storybook",
        'Storybook failed to open. Please ensure the storybook server is running by executing "npm run storybook"',
      )
    })

    ipcMain.on("storybook-toggle", () => {
      showStorybook = !showStorybook
      loadURL(window, appPath, showStorybook)
    })
  }
})

// fires when all windows are closed
app.on("window-all-closed", app.quit)

// setup the auto-updater
createUpdater(app)
