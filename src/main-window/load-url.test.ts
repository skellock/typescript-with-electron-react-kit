import { loadURL } from "./load-url"

test("loads from storybook", () => {
  const loadStub = jest.fn()
  loadURL({ loadURL: loadStub } as any, "a", true)
  expect(loadStub).toBeCalledWith("http://localhost:6006")
})

test("loads from electron", () => {
  const loadStub = jest.fn()
  loadURL({ loadURL: loadStub } as any, "a", false)
  expect(loadStub).toBeCalledWith("file:///a/out/index.html")
})
