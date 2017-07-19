import { shell } from 'electron'

export const visit: Electron.MenuItemConstructorOptions = {
  label: 'Visit on Github',
  click() {
    shell.openExternal('https://github.com/skellock/electron-starter')
  }
}
