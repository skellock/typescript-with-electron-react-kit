import { createSharedMenuItems } from "./shared-menu"
import * as isDev from "electron-is-dev"

export function createLinuxMenu(
  window: Electron.BrowserWindow,
): Electron.MenuItemConstructorOptions[] {
  const shared = createSharedMenuItems(window)

  const fileMenu: Electron.MenuItemConstructorOptions = {
    label: "&File",
    submenu: [{ ...shared.quit, accelerator: "Alt+F4" }],
  }

  const viewMenu: Electron.MenuItemConstructorOptions = {
    label: "View",
    submenu: isDev
      ? [
          { ...shared.reload, accelerator: "Ctrl+R" },
          { ...shared.storybook, accelerator: "Ctrl+Shift+S" },
          { ...shared.toggleDevTools, accelerator: "Ctrl+Alt+I" },
        ]
      : [{ ...shared.fullScreen, accelerator: "Ctrl+Alt+F" }],
  }

  const helpMenu: Electron.MenuItemConstructorOptions = {
    label: "Help",
    submenu: [process.env.HOMEPAGE && shared.visit].filter(Boolean),
  }

  return [fileMenu, viewMenu, helpMenu]
}
