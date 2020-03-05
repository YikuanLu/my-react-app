
const { override, fixBabelImports } = require("customize-cra")
const webpackConfig = require('./config/webpack.config')
const addWebpackModules = () => (config, env) => {
  config.resolve.alias = { ...webpackConfig.resolve.alias }
  return config
}

module.exports = override(
  addWebpackModules(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
)
