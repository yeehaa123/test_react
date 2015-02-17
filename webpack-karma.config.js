var WebpackRewirePlugin = require('rewire-webpack');
var  path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

var deps = [
  'react.js',
  'addons.js',
];

var config =  {
  module: {
    noParse: [],
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel'},
      { test: /\.js$/, loader: 'jsx' }
    ]
  },
  resolve: {
    alias: {}
  },
  plugins: [new WebpackRewirePlugin()]
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
