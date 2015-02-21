var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var autoprefixer = require('autoprefixer-core');
var customProperties = require('postcss-custom-properties');
var customSelectors = require('postcss-custom-selectors');
var nested = require('postcss-nested');
var csstyle = require('csstyle');

var config = {
  entry: {
    app: "./src/entry.js",
    vendor: [
      'react',
      'lodash',
      'reflux',
      'immutable',
      'superagent'
    ]
  },
  output: {
    path: './build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css!postcss') }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new ExtractTextPlugin("style.css")
  ],
  postcss: [
    nested,
    csstyle,
    customSelectors(),
    customProperties(),
    autoprefixer
  ]
};

module.exports = config;
