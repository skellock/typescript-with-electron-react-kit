import "./mock-request-animation-frame"

jest.mock("electron-window-state-manager", () => {
  return jest.fn().mockImplementation(() => ({
    saveState: jest.fn(),
  }))
})

jest.mock("electron", () => {
  const events = require("events")
  return {
    app: {
      getPath: jest.fn().mockReturnValue("path"),
      getName: jest.fn().mockReturnValue("name"),
    },
    BrowserWindow: jest.fn().mockImplementation(() => {
      const windowEmitter = new events.EventEmitter()
      const webContentsEmitter = new events.EventEmitter()
      return {
        on: windowEmitter.on,
        emit: windowEmitter.emit,
        loadURL: jest.fn(),
        show: jest.fn(),
        focus: jest.fn(),
        webContents: {
          on: webContentsEmitter.on,
          emit: webContentsEmitter.emit,
        },
        maximize: jest.fn(),
      }
    }),
  }
})

jest.mock("mousetrap")
