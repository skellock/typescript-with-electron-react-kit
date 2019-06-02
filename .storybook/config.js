const { configure } = require("@storybook/react")
const requireContext = require("require-context.macro")

const req = requireContext("../src", true, /story\.tsx?$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
