const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const webpack = require('webpack')

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin),
  )

  config.plugins.push(new webpack.DefinePlugin({
    __DEV__: JSON.stringify(env.mode !== 'production'),
  }))

  return config
}
