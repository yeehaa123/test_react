var  path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

var deps = [
  'react/react.js',
];

var config = {
  entry: ['./src/entry.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: '6to5'},
      { test: /\.js$/, loader: 'jsx' }
    ]
  },
  resolve: {
    alias: {}
  }
}

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
