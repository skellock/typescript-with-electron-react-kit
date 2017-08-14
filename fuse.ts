import { FuseBox, CSSPlugin, Sparky, CopyPlugin } from 'fuse-box'
import { spawn } from 'child_process'

const DEV_PORT = 4445
const OUTPUT_DIR = 'out'
const ASSETS = ['*.jpg', '*.png', '*.jpeg', '*.gif', '*.svg']

// are we running in production mode?
const isProduction = process.env.NODE_ENV === 'production'

// copy the renderer's html file into the right place
Sparky.task('copy-html', () => {
  return Sparky.src('src/renderer/index.html').dest(`${OUTPUT_DIR}/$name`)
})

// the default task
Sparky.task('default', ['copy-html'], () => {
  // setup the producer with common settings
  const fuse = FuseBox.init({
    homeDir: 'src',
    output: `${OUTPUT_DIR}/$name.js`,
    target: 'electron',
    log: isProduction,
    cache: !isProduction,
    sourceMaps: true,
  })

  // start the hot reload server
  if (!isProduction) {
    fuse.dev({ port: DEV_PORT, httpServer: false })
  }

  // bundle the electron main code
  const mainBundle = fuse.bundle('main').instructions('> [main/main.ts]')

  // and watch unless we're bundling for production
  if (!isProduction) {
    mainBundle.watch()
  }

  // bundle the electron renderer code
  const rendererBundle = fuse
    .bundle('renderer')
    .instructions('> [renderer/index.tsx] +fuse-box-css')
    .plugin(CSSPlugin())
    .plugin(CopyPlugin({ useDefault: false, files: ASSETS, dest: 'assets', resolve: 'assets/' }))

  // and watch & hot reload unless we're bundling for production
  if (!isProduction) {
    rendererBundle.watch()
    rendererBundle.hmr()
  }

  // when we are finished bundling...
  return fuse.run().then(() => {
    if (!isProduction) {
      // startup electron
      spawn('node', [`${__dirname}/node_modules/electron/cli.js`, __dirname], { stdio: 'inherit' })
    }
  })
})
