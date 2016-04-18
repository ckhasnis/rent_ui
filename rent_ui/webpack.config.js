var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './WebContent/public/');
var APP_DIR = path.resolve(__dirname, './src/app/index.js');

var config = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch: false,
  module : {
    loaders : [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!autoprefixer!less'},
      {test: /\.woff2(0,1)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.(otf|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'},
      {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      {
        test : /\.js?$/,
        include : './src/',
        loaders : ['babel', 'jsx', 'react-hot'],
        exclude : /node_modules/
      },
      {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['react', 'es2015']
          }
      }
      //{test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0&cacheDirectory=true&loose=all'}
    ]
  }
   /*,
   plugins: [
     new webpack.optimize.UglifyJsPlugin({
       sourceMap: false,
       mangle: false
     })
   ]*/
}
module.exports = config;
