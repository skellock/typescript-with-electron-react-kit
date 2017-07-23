const { test } = require('ava')
const { createMainWindow } = require('./main-window')

test('main window', t => {
  const window = createMainWindow(__dirname)
  t.deepEqual(window.getSize(), [600, 500])
})
