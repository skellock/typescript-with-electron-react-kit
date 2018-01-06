// A straight thru wrapper with the intention to add contexts
// which will swap out groups of keybinds at a time.
import * as Mousetrap from "mousetrap"
import { isMac } from "../platform"

export type KeyboardCallback = (e: ExtendedKeyboardEvent, combo: string) => any
export type KeyboardAction = "keypress" | "keydown" | "keyup"

// only needs to happen once
// if (Mousetrap.prototype) {
//   Mousetrap.prototype.stopCallback = () => false
// }

export const commandOrControlKey = () => (isMac() ? "command" : "ctrl")

/**
 * Binds a keystroke to a function.
 *
 * @param keys The keystroke.
 * @param callback The function to fire.
 * @param action Optional keyboard event to further constraint.
 */
export function bindKey(
  keys: string | string[],
  callback: KeyboardCallback,
  action?: KeyboardAction,
) {
  Mousetrap.bind(keys, callback, action)
}

/**
 * Removes a keybind.
 *
 * @param keys The keystroke.
 * @param action Optional keyboard event to further constraint.
 */
export function unbindKey(keys: string | string[], action?: KeyboardAction) {
  Mousetrap.unbind(keys, action)
}
