const path = require('path');
const { override } = require("customize-cra")
const webpackConfig = require('./config/webpack.config')
/* function resolve(dir) {
  return path.join(__dirname, '.', dir)
} */
const addWebpackModules = () => (config, env) => {
  config.module.rules.push(...webpackConfig.module.rules)
  config.resolve.alias = {
    '@': path.resolve(__dirname, './src'),
  }
  return config
}
module.exports = override(
  addWebpackModules()
)
