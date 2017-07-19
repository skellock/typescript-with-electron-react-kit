import { visit } from './shared-menu'

const fileMenu: Electron.MenuItemConstructorOptions = {
  label: '&File',
  submenu: []
}

const helpMenu: Electron.MenuItemConstructorOptions = {
  label: 'Help',
  submenu: [visit]
}

export const linuxMenu: Electron.MenuItemConstructorOptions[] = [fileMenu, helpMenu]
