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
      { loader: 'jshint-loader',
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
        loaders: ['style', 'css'],
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        loader: 'file',
      },
    ],
  },
  jshint: {
    // any jshint option http://www.jshint.com/docs/options/
    // i. e.
    camelcase: true,

    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: true,

    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appPath, 'index.html'),
      minify: false,
    }),
  ]
};
