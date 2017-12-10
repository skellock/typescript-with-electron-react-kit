declare module "electron-window-state-manager" {
  import { BrowserWindow } from "electron"

  interface ElectronStateManagerOptions {
    /** The default width for this window. */
    defaultWidth?: number
    /** The default height for this window. */
    defaultHeight?: number
  }

  /**
   * Manages an Electron.BrowserWindow's dimensions and stores it to disk.
   */
  class ElectronStateManager {
    /**
     * Creates a manager that loads/saves a window's coordinates & dimensions.
     *
     * @param name The name of the window.
     * @param options Some default options.
     */
    constructor(name: string, options?: ElectronStateManagerOptions)
    /** Save this window's dimensions */
    saveState(browserWindow: BrowserWindow): void
    /** The window width. */
    width: number
    /** The window height. */
    height: number
    /** the window left position. */
    x: number
    /** The window right position. */
    y: number
    /** Is this maximized? */
    maximized: boolean
  }

  export = ElectronStateManager
}
