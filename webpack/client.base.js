const reduce = require('lodash.reduce');
const { resolve } = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { _moduleAliases: aliases } = require('../package.json');


const plugins = [
  new FriendlyErrorsWebpackPlugin(),
];

module.exports = {
  resolve: {
    alias: reduce(aliases, (acc, alias, key) => ({
      ...acc, [key]: resolve(alias),
    }), {}),
  },

  plugins,
};
