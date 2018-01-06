import { autoUpdater } from "electron-updater"
import * as log from "electron-log"
import * as isDev from "electron-is-dev"

/**
 * Should we peform the auto-update check?
 */
const shouldCheck = !isDev

/*
# Testing In Development

You may want to enable this in dev-mode the ensure everything
is working properly. To do this, you'll need to have a config
file called "dev-app-update.yml" in the project's root.

If you're shipping via S3 or another provider, please the
[electron-builder docs](https://github.com/electron-userland/electron-builder/wiki/Publishing-Artifacts).

# Example File

```yml
provider: 'github'
repo: 'typescript-with-electron-react-kit'
owner: 'skellock'
```

Heads up: dev-app-update.yml is in the .gitignore file.
*/

/**
 * Setup the auto-update capabilities.
 *
 * @param app The electron app.
 */
export function createUpdater(app: Electron.App): void {
  // jet if we shouldn't be here
  if (!shouldCheck) {
    return
  }

  // configure the autoUpdater's logger
  autoUpdater.logger = log

  // fires when the app is ready
  app.on("ready", () => {
    autoUpdater.checkForUpdates()
  })

  autoUpdater.on("checking-for-update", () => {
    log.info("checking for update")
  })

  autoUpdater.on("update-available", (info: string) => {
    log.info("update available")
  })

  autoUpdater.on("update-not-available", (info: string) => {
    log.info("update not available")
  })

  autoUpdater.on("error", (err: Error) => {
    log.error("error updating", err.message)
  })

  autoUpdater.signals.progress(info => {
    log.info(`${info.percent}%`)
  })

  // fires when an update has been downloaded
  autoUpdater.signals.updateDownloaded(info => {
    log.info("update downloaded")
    autoUpdater.quitAndInstall()
  })
}
