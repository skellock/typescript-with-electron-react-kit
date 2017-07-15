const { FuseBox, CSSPlugin, Sparky } = require('fuse-box')
const { spawn } = require('child_process')

const DEV_PORT = 4445
const OUTPUT_DIR = 'dist'

// copy the renderer's html file into the right place
Sparky.task('copy-html', () => {
  return Sparky
    .src('src/renderer/index.html')
    .dest(`${OUTPUT_DIR}/$name`)
})

// the default task
Sparky.task('default', ['copy-html'], () => {
  // setup the producer with common settings
  const fuse = FuseBox.init({
    homeDir: 'src',
    output: `${OUTPUT_DIR}/$name.js`,
    target: 'electron'
  })

  // start the hot reload server
  fuse.dev({ port: DEV_PORT, httpServer: false })

  // bundle the electron main code
  fuse
    .bundle('main')
    .watch()
    .instructions('> [main/main.ts]')

  // bundle the electron renderer code
  fuse
    .bundle('renderer')
    .plugin(CSSPlugin())
    .watch()
    .hmr()
    .instructions('> [renderer/index.tsx]')

  // when we are finished bundling...
  return fuse
    .run()
    .then(() => {
      // startup electron
      spawn('node', [`${__dirname}/node_modules/electron/cli.js`, __dirname])
    })
})
