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
    inline: true,
  },
  debug: true,
  devtool: 'cheap-module-inline-source-map',
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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader',
          // 'eslint-loader',
        ],
        include: appPath,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg|ttf|woff|eot|woff2)$/,
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