import { Menu } from 'electron'
import { macMenu } from './macos-menu'
import { linuxMenu } from './linux-menu'
import { windowsMenu } from './windows-menu'
import { isMac, isLinux, isWindows } from '../../shared'

export function setupMenu(window: Electron.BrowserWindow) {
  if (isMac()) {
    const menu = Menu.buildFromTemplate(macMenu)
    Menu.setApplicationMenu(menu)
  } else if (isLinux()) {
    const menu = Menu.buildFromTemplate(linuxMenu)
    window.setMenu(menu)
  } else if (isWindows()) {
    const menu = Menu.buildFromTemplate(windowsMenu)
    window.setMenu(menu)
  }
}
