var WebpackRewirePlugin = require('rewire-webpack');
var  path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config =  {
  module: {
    noParse: [],
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  plugins: [new WebpackRewirePlugin()]
};

module.exports = config;
