export function isLinux() {
  return process.platform.includes('linux')
}

export function isWindows() {
  return process.platform.includes('win')
}

export function isMac() {
  return process.platform === 'darwin'
}
