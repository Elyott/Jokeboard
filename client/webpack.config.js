var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [ 'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }],
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
