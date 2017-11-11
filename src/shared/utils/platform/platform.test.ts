import { isLinux, isMac, isWindows } from './platform'

test('detects linux', () => {
  process.platform = 'linux'
  expect(isLinux()).toBe(true)
})

test('detects windows', () => {
  process.platform = 'win32'
  expect(isWindows()).toBe(true)
})

test('detects mac', () => {
  process.platform = 'darwin'
  expect(isMac()).toBe(true)
})
