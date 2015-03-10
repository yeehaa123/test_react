var WebpackRewirePlugin = require('rewire-webpack');
var  path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var autoprefixer = require('autoprefixer-core');
var customProperties = require('postcss-custom-properties');
var customSelectors = require('postcss-custom-selectors');
var nested = require('postcss-nested');
var csstyle = require('csstyle');
var variables = require('./src/styles/variables');

var config =  {
  devtool: 'eval-source-map',
  module: {
    noParse: [],
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel?experimental'], exclude: /node_modules/},
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'style-loader!css!postcss' },
      { test: /\.(png|woff)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [new WebpackRewirePlugin()],
  postcss: [
    nested,
    customSelectors(),
    customProperties({variables: variables}),
    csstyle,
    autoprefixer
  ]
};

module.exports = config;
