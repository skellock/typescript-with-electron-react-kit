const { configure } = require('@storybook/react')

const req = require.context('../src', true, /story\.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
