var path = require('path');
var webpack = require('webpack');
var url = require("file-loader");
// require("url-loader?limit=10000!./file.png");
// require("url-loader?mimetype=image/png!./file.png");
// require("url-loader?prefix=img/!./file.png");


module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/chatroom'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'client')
    },
     { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    
    {
      test : /\.css$/,
      loader : 'style-loader!css-loader'
    },
    // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
    //   loader: "url-loader?limit=10000&mimetype=application/font-woff" 
    // },
    // { test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
    //   loader: "file-loader" 
    // }
    
    // { test: /\.jpg$/, loader: 'file-loader' },
    // CSS
    // { 
    //   test: /\.styl$/, 
    //   include: path.join(__dirname, 'client'),
    //   loader: 'style-loader!css-loader!stylus-loader'
    // }
    ]
  }
};