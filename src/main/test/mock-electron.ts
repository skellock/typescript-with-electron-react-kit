import { stub } from 'sinon'
import { EventEmitter } from 'events'

export class WebContents extends EventEmitter {}

/**
 * Spins up an Electron Browser Window full of stubby goodness.
 */
export class BrowserWindow extends EventEmitter {
  webContents: WebContents = new WebContents()
  getSize() {}
  loadURL() {}
  maximize() {}
  show() {}
  focus() {}
}

/**
 * The electron app.
 */
export const app = {
  getName: stub().returns('hi'),
}

/**
 * The whole "namespace"
 */
export const electron = {
  app,
  BrowserWindow,
}

// export const app = electron.app

export default electron
