import { BrowserWindow } from 'electron'
import { join } from 'path'
import { format } from 'url'

// default dimensions
const DIMENSIONS = { width: 600, height: 500, minWidth: 450, minHeight: 450 }

/**
 * Creates the main window.
 *
 * @param appPath The path to the bundle root.
 * @return The main BrowserWindow.
 */
export function createWindow(appPath: string) {
  const window = new BrowserWindow({
    ...DIMENSIONS,
    show: false,
    useContentSize: true,
    titleBarStyle: 'hidden'
  })
  
  // load entry html page in the renderer.
  window.loadURL(
    format({
      pathname: join(appPath, 'out/index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  // only appear once we've loaded
  window.webContents.on('did-finish-load', () => {
    window.show()
    window.focus()
  })


  return window
}
