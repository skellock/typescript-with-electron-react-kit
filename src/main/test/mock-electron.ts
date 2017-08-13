import { stub } from 'sinon'

interface Events {
  [eventName: string]: [() => void]
}

export class WebContents {
  events: Events = {}

  on(eventName: string, callback: () => void): void {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(callback)
  }

  emit(eventName: string) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => fn())
    }
  }
}

/**
 * Spins up an Electron Browser Window full of stubby goodness.
 */
export class BrowserWindow {
  webContents: WebContents = new WebContents()
  events: Events = {}
  constructor() {
    this.webContents = new WebContents()
  }

  on(eventName: string, callback: () => void): void {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(callback)
  }

  emit(eventName: string) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => fn())
    }
  }

  getSize() {}
  loadURL() {}
  maximize() {}
}
export const electron = {
  app: {
    getName: stub().returns('hi'),
  },
  BrowserWindow,
}

export default electron
