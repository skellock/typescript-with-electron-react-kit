// Type definitions for electron-store 1.2.0
// Project: https://github.com/sindresorhus/electron-store
// TypeScript Version: 2.4.0

declare module 'electron-store' {
  interface ElectronStoreOptions {
    /** Default data. */
    defaults?: {}

    /** Name of the storage file (without extension). Default is `config`. */
    name?: string

    /** Storage file location. Don't specify this unless absolutely necessary! */
    cwd?: string
  }

  /**
   * Simple data persistence for your Electron app or module.
   * 
   * You can use dot-notation in a key to access nested properties. The instance is iterable
   * so you can use it directly in a for…of loop.
   */
  export default class ElectronStore
    implements Iterable<[string, string | number | boolean | symbol | {}]> {
    constructor(options?: ElectronStoreOptions)

    [Symbol.iterator](): Iterator<[string, string | number | boolean | symbol | {}]>

    /** Set an item. */
    set(key: string, value: any): void

    /** Set multiple items at once. */
    set(object: {}): void

    /** Get an item or defaultValue if the item does not exist. */
    get(key: string, defaultValue?: any): any

    /** Check if an item exists. */
    has(key: string): boolean

    /** Delete an item. */
    delete(key: string): void

    /** Delete all items. */
    clear(): void

    /** Open the storage file in the user's editor. */
    openInEditor(): void

    /** Get the item count. */
    size: number

    /** Get all the data as an object or replace the current data with an object. */
    store: {}

    /** Get the path to the storage file. */
    path: string
  }
}
