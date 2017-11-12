// switched to js & common to rule out ts issues? should i don't think
// it matters, the same error appears.
const initStoryshots = require("@storybook/addon-storyshots").default

/**
 * Poor man's polyfill for raf.
 */
global.window = global
window.addEventListener = () => {}
window.requestAnimationFrame = () => {
  throw new Error("requestAnimationFrame is not supported in Node")
}

/**
 * I believe we should be able to call initStoryshots() with just
 * the default parameters, but I was trying a few things to help
 * troubleshoot.
 */
const { resolve } = require("path")
const configPath = resolve(__dirname, "..", ".storybook")
initStoryshots({ configPath, framework: "react" })
