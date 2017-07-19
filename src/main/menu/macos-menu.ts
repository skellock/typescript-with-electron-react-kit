import { app } from 'electron'
import { visit } from './shared-menu'

const name: string = app.getName()

const appMenu: Electron.MenuItemConstructorOptions = {
  label: name,
  submenu: [
    { label: `About ${name}`, role: 'orderFrontStandardAboutPanel' },
    { type: 'separator' },
    { label: `Hide ${name}`, accelerator: 'Command+H', role: 'hide' },
    { label: 'Hide Others', accelerator: 'Command+Option+H', role: 'hideOtherApplications' },
    { label: 'Show All', role: 'unhideAllApplications' },
    { type: 'separator' },
    { label: 'Quit', accelerator: 'Command+Q', role: 'quit' }
  ]
}

const helpMenu: Electron.MenuItemConstructorOptions = {
  label: 'Help',
  submenu: [visit]
}

export const macMenu: Electron.MenuItemConstructorOptions[] = [appMenu, helpMenu]
