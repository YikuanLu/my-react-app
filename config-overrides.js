
const { override } = require("customize-cra")
const webpackConfig = require('./config/webpack.config')
const addWebpackModules = () => (config, env) => {
  // config.module.rules.push(...webpackConfig.module.rules)
  config.resolve.alias = { ...webpackConfig.resolve.alias }
  return config
}
module.exports = override(
  addWebpackModules()
)
