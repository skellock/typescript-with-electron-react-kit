const { app, BrowserWindow } = require("electron")
const WindowStateManager = require("electron-window-state-manager")
import { loadURL } from "./load-url"

// default dimensions
export const DIMENSIONS = { width: 600, height: 500, minWidth: 450, minHeight: 450 }

/**
 * Creates the main window.
 *
 * @param appPath The path to the bundle root.
 * @param showDelay How long in ms before showing the window after the renderer is ready.
 * @return The main BrowserWindow.
 */
export function createMainWindow(appPath: string, showDelay: number = 100) {
  // persistent window state manager
  const windowState = new WindowStateManager("main", {
    defaultWidth: DIMENSIONS.width,
    defaultHeight: DIMENSIONS.height,
  })

  // create our main window
  const window = new BrowserWindow({
    minWidth: DIMENSIONS.minWidth,
    minHeight: DIMENSIONS.minHeight,
    width: windowState.width,
    height: windowState.height,
    x: windowState.x,
    y: windowState.y,
    show: false,
    useContentSize: true,
    titleBarStyle: "hidden-inset",
    autoHideMenuBar: true,
    // backgroundColor: '#fff',
    vibrancy: "light",
    transparent: true,
    title: app.getName(),
    webPreferences: {
      backgroundThrottling: false,
      textAreasAreResizable: false,
    },
  })

  // maximize if we did before
  if (windowState.maximized) {
    window.maximize()
  }

  // trap movement events
  window.on("close", () => windowState.saveState(window))
  window.on("move", () => windowState.saveState(window))
  window.on("resize", () => windowState.saveState(window))

  // load entry html page in the renderer.
  loadURL(window, appPath)

  // only appear once we've loaded
  window.webContents.on("did-finish-load", () => {
    setTimeout(() => {
      window.show()
      window.focus()
    }, showDelay)
  })

  return window
}
