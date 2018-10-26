require("@babel/polyfill");
require('@babel/register')({
  ignore: [/\/(dist|node_modules)\//],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "react-loadable/babel",
    "dynamic-import-node",
  ],
});
require('module-alias/register');

require('./app.js');
