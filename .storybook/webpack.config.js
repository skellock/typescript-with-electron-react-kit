const path = require("path")

module.exports = async ({ config }) => {
  //const myConfig = genDefaultConfig(config, env)

  config.module.rules.push({
    test: /\.tsx?$/,
    loader: "ts-loader",
    exclude: /node_modules/,
    include: [path.resolve(__dirname, "..", "src"), path.resolve(__dirname, "views")],
  })

  config.resolve.extensions.unshift(".tsx")
  config.resolve.extensions.unshift(".ts")

  return config
}
