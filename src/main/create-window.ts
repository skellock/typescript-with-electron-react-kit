import { BrowserWindow } from 'electron'
import { join } from 'path'
import { format } from 'url'

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 500

/**
 * Creates the main window.
 *
 * @param appPath The path to the bundle root.
 * @return The main BrowserWindow.
 */
export function createWindow(appPath: string) {
  const window = new BrowserWindow({
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  })

  // load entry html page in the renderer.
  window.loadURL(
    format({
      pathname: join(appPath, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  return window
}
