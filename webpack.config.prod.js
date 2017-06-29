const path = require('path')
const webpack = require('webpack')

module.exports = options => {
  return {
    devtool: 'source-map',

    entry: './src/index.js',

    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    },

    plugins: [
      new webpack.optimize.DedupePligin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePligin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.scss?$/,
          loader: 'style!css!sass',
          include: path.join(__dirname, 'src', 'styles')
        },
        {
          test: /\.png$/,
          loader: 'file'
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file'
        }
      ]
    }
  }
}
