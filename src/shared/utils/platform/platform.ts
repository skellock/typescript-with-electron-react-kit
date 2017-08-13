export function isLinux() {
  return process.platform === 'linux'
}

export function isWindows() {
  return process.platform === 'win32'
}

export function isMac() {
  return process.platform === 'darwin'
}
