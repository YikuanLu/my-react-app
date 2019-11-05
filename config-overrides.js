const { override } = require("customize-cra")
const webpackConfig = require('./build/webpack.config')
const addWebpackModules = () => (config, env) => {
  config.module.rules.push(...webpackConfig.module.rules)
  return config
}
module.exports = override(
  addWebpackModules()
)
