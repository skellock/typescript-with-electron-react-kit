import "./mock-request-animation-frame"
import * as React from "react"

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

const mockPoseComponent = (name: string) => () => (props: {
  children: React.ReactChildren
  style: ElementCSSInlineStyle,
}) => {
  const { style, children } = props
  return React.createElement(name, { style }, children)
}

jest.mock("react-pose", () => {
  const module = jest.genMockFromModule("react-pose") as any

  module.default = jest.fn()

  module.default.div = mockPoseComponent("div")

  return module
})
