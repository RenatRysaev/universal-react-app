const { resolve } = require('path');
// const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const merge = require('webpack-merge');
const baseConfig = require('./client.base');

console.log('DIST', resolve('dist'))

const plugins = [
  // new webpack.HotModuleReplacementPlugin(),
  new ReactLoadablePlugin({ filename: resolve('dist/react-loadable.json') }),
];

module.exports = merge(baseConfig, {
  entry: resolve('src/client/app'),

  output: {
    path: resolve('dist'),
    filename: 'client.bundle.js',
    // publicPath: resolve('dist'),
  },

  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins,
});
