const path = require('path')
const webpack = require('webpack')

module.exports = options => {
  return {
    devtool: 'eval',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        }
      ]
    }
  }
}
