// switched to commonjs, but this should work fine with ts too
const { configure } = require('@storybook/react')

const req = require.context('../src', true, /story\.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
