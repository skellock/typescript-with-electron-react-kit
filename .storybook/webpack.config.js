const path = require('path')
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const myConfig = genDefaultConfig(config, env)

  myConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    include: path.resolve(__dirname, '..', 'src'),
  })
  
  // i tried adding url-loader and file-loader
  // but that only seems to break storybooks
  // rather than fix storyshots

  myConfig.resolve.extensions.unshift('.tsx')
  myConfig.resolve.extensions.unshift('.ts')

  return myConfig
}
