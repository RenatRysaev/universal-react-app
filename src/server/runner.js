require("@babel/polyfill");
require('@babel/register')({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["react-loadable/babel", "babel-plugin-dynamic-import-node"],
});
require('module-alias/register');

require('./app.js');
