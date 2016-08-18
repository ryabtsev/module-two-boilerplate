var path = require('path')
var appPath = path.join(__dirname, 'src')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: appPath,
  entry: {
    bundle: 'main.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
  },
  // debug: true,
  // devtool: 'cheap-module-inline-source-map',
  output: {
    path: './compiled',
    filename: 'bundle.js'
  },
  resolve: {
    root: appPath,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: appPath,
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        loader: 'file',
        include: appPath,
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
