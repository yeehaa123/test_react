var webpack = require('webpack');

var config = {
  entry: {
    app: "./src/entry.js",
    vendor: ['react', 'firebase', 'mach']
  },
  output: {
    path: './build',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};

module.exports = config;
