import { isLinux, isMac, isWindows } from "./platform"

test("detects linux", () => {
  Object.defineProperty(process, "platform", { value: "linux" })
  expect(isLinux()).toBe(true)
})

test("detects windows", () => {
  Object.defineProperty(process, "platform", { value: "win32" })
  expect(isWindows()).toBe(true)
})

test("detects mac", () => {
  Object.defineProperty(process, "platform", { value: "darwin" })
  expect(isMac()).toBe(true)
})
