import { shell } from 'electron'

export function createSharedMenuItems(window: Electron.BrowserWindow) {
  const visit: Electron.MenuItemConstructorOptions = {
    label: 'Visit on Github',
    click() {
      shell.openExternal('https://github.com/skellock/electron-starter')
    },
  }

  const reload: Electron.MenuItemConstructorOptions = {
    label: 'Reload',
    click() {
      window.webContents.reload()
    },
  }

  const quit: Electron.MenuItemConstructorOptions = { label: 'Quit', role: 'quit' }

  const toggleDevTools: Electron.MenuItemConstructorOptions = {
    label: 'Toggle Developer Tools',
    click() {
      window.webContents.toggleDevTools()
    },
  }

  const fullScreen: Electron.MenuItemConstructorOptions = {
    label: 'Toggle Full Screen',
    click() {
      window.setFullScreen(!window.isFullScreen())
    },
  }

  return {
    visit,
    reload,
    quit,
    toggleDevTools,
    fullScreen,
  }
}
