jest.mock("mousetrap", () => {
  return {
    bind: jest.fn(),
    unbind: jest.fn(),
  }
})
jest.mock("../../../../shared", () => {
  return {
    isMac: jest.fn().mockReturnValueOnce(true),
  }
})

import * as Mousetrap from "mousetrap"

test("changes tabs", () => {
  const fn = () => true
  const { bindKey, unbindKey } = require("./keyboard")
  bindKey("shift+1", fn, "keyup")
  unbindKey("shift+2", "keyup")

  expect(Mousetrap.bind).toHaveBeenCalledWith("shift+1", fn, "keyup")
  expect(Mousetrap.unbind).toHaveBeenCalledWith("shift+2", "keyup")
})

test("mac is command key", () => {
  const { commandOrControlKey } = require("./keyboard")
  expect(commandOrControlKey()).toBe("command")
})

test("non-mac is control", () => {
  // jest.resetModules()
  const shared = require("../../../../shared")
  shared.isMac = jest.fn().mockReturnValue(false)
  const { commandOrControlKey } = require("./keyboard")
  expect(commandOrControlKey()).toBe("ctrl")
})
