const path = require("path")
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js")

module.exports = (config, env) => {
  const myConfig = genDefaultConfig(config, env)

  myConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: "ts-loader",
    exclude: /node_modules/,
    include: [path.resolve(__dirname, "..", "src"), path.resolve(__dirname, "views")],
  })

  myConfig.resolve.extensions.unshift(".tsx")
  myConfig.resolve.extensions.unshift(".ts")

  return myConfig
}
