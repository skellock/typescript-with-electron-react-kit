const { test } = require('ava')
const { createMainWindow } = require('./main-window')

test('main window', t => {
  const window = createMainWindow('/tmp')
  t.deepEqual(window.getSize(), [600, 500])
})
