export function isLinux(platform = process.platform) {
  return platform === "linux"
}

export function isWindows(platform = process.platform) {
  return platform === "win32"
}

export function isMac(platform = process.platform) {
  return platform === "darwin"
}
