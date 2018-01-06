import { Menu } from "electron"
import { createMacMenu } from "./macos-menu"
import { createLinuxMenu } from "./linux-menu"
import { createWindowsMenu } from "./windows-menu"
import { isMac, isLinux, isWindows } from "../lib/platform"

/**
 * Attaches the menu to the appropriate place.
 *
 * @param window The main window.
 */
export function createMenu(window: Electron.BrowserWindow) {
  if (isMac()) {
    // on mac, the menu goes on the app
    const template = createMacMenu(window)
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  } else if (isLinux()) {
    // on linux, the menu goes on the window
    const template = createLinuxMenu(window)
    const menu = Menu.buildFromTemplate(template)
    window.setMenu(menu)
  } else if (isWindows()) {
    // on windows, the menu goes on the window
    const template = createWindowsMenu(window)
    const menu = Menu.buildFromTemplate(template)
    window.setMenu(menu)
  }
}
