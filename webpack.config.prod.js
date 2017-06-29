const path = require('path')
const webpack = require('webpack')

module.exports = options => {
  return {
    devtool: 'source-map',

    entry: ['./src/index.js'],

    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    }
  }
}
