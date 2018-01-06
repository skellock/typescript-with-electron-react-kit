import { shell, ipcMain } from "electron"

export function createSharedMenuItems(window: Electron.BrowserWindow) {
  const visit: Electron.MenuItemConstructorOptions = {
    label: "On The Web",
    click() {
      if (process.env.HOMEPAGE) {
        shell.openExternal(process.env.HOMEPAGE)
      }
    },
  }

  const reload: Electron.MenuItemConstructorOptions = {
    label: "Reload",
    click() {
      window.webContents.reload()
    },
  }

  const storybook: Electron.MenuItemConstructorOptions = {
    label: "Toggle Storybook",
    click() {
      ipcMain.emit("storybook-toggle")
    },
  }

  const quit: Electron.MenuItemConstructorOptions = { label: "Quit", role: "quit" }

  const toggleDevTools: Electron.MenuItemConstructorOptions = {
    label: "Toggle Developer Tools",
    click() {
      window.webContents.toggleDevTools()
    },
  }

  const fullScreen: Electron.MenuItemConstructorOptions = {
    label: "Toggle Full Screen",
    click() {
      window.setFullScreen(!window.isFullScreen())
    },
  }

  return {
    visit,
    reload,
    storybook,
    quit,
    toggleDevTools,
    fullScreen,
  }
}
