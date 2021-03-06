var path = require('path')
var appPath = path.join(__dirname, 'src')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: 'main.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
  },
  debug: true,
  devtool: 'cheap-module-inline-source-map',
  output: {
    path: './compiled',
    filename: 'bundle_[hash].js'
  },
  resolve: {
    root: appPath,
  },
  module: {
    preLoaders: [
      { loader: 'eslint-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(gif|png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
        loader: 'file',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appPath, 'index.html'),
      minify: false,
    }),
  ]
};
