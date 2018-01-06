import { app } from "electron"
import { createSharedMenuItems } from "./shared-menu"
import * as isDev from "electron-is-dev"

export function createMacMenu(
  window: Electron.BrowserWindow,
): Electron.MenuItemConstructorOptions[] {
  const shared = createSharedMenuItems(window)
  const name: string = app.getName()

  const appMenu: Electron.MenuItemConstructorOptions = {
    label: name,
    submenu: [
      { label: `About ${name}`, role: "orderFrontStandardAboutPanel" },
      { type: "separator" },
      { label: `Hide ${name}`, accelerator: "Command+H", role: "hide" },
      { label: "Hide Others", accelerator: "Command+Option+H", role: "hideOtherApplications" },
      { label: "Show All", role: "unhideAllApplications" },
      { type: "separator" },
      { ...shared.quit, accelerator: "Command+Q" },
    ],
  }

  const viewMenu: Electron.MenuItemConstructorOptions = {
    label: "View",
    submenu: isDev
      ? [
          { ...shared.reload, accelerator: "Command+R" },
          { ...shared.storybook, accelerator: "Command+Shift+S" },
          { ...shared.toggleDevTools, accelerator: "Alt+Command+I" },
        ]
      : [{ ...shared.fullScreen, accelerator: "Ctrl+Command+F" }],
  }

  const helpMenu: Electron.MenuItemConstructorOptions = {
    label: "Help",
    submenu: [process.env.HOMEPAGE && shared.visit].filter(Boolean),
  }

  return [appMenu, viewMenu, helpMenu]
}
