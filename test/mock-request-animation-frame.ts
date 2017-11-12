/**
 * Poor man's polyfill for raf.
 */

// @ts-ignore
global.window = global
window.addEventListener = () => {}
window.requestAnimationFrame = () => 1
