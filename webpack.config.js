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
  // debug: true,
  devtool: 'cheap-module-inline-source-map',
  output: {
    path: './compiled',
    filename: 'bundle_[hash].js'
  },
  resolve: {
    root: appPath,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
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
