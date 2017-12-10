import { createMainWindow } from "./main-window"
// @ts-ignore
import * as containDeep from "jest-expect-contain-deep"
import { BrowserWindow } from "electron"
const WindowStateManager = require("electron-window-state-manager")

it("can read window state", () => {
  WindowStateManager.mockImplementation(() => ({ width: 10, height: 40 }))
  createMainWindow(__dirname)
  expect(BrowserWindow).toBeCalledWith(containDeep({ width: 10, height: 40 }))
})

it("might maximize on startup", () => {
  WindowStateManager.mockImplementation(() => ({ maximized: true }))
  const window = createMainWindow(__dirname)
  expect(window.maximize).toBeCalled()
})

it("might not maximize on startup", () => {
  WindowStateManager.mockImplementation(() => ({ maximized: false }))
  expect(createMainWindow(__dirname).maximize).not.toBeCalled()
})

test("saves window state", () => {
  let saveState = jest.fn()
  WindowStateManager.mockImplementation(() => ({ saveState: saveState }))
  const window: BrowserWindow = createMainWindow(__dirname)
  window.emit("close")
  window.emit("move")
  window.emit("resize")
  expect(saveState).toHaveBeenCalledTimes(3)
})

test("show the window after we finish loading + delay", async () => {
  const window: BrowserWindow = createMainWindow(__dirname, 1)
  window.webContents.emit("did-finish-load")
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  await delay(2)
  expect(window.show).toHaveBeenCalled()
  expect(window.focus).toHaveBeenCalled()
})
