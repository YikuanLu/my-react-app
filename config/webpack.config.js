// webpack.config.js
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          fix: true
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  }
}
