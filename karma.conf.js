var WebpackRewirePlugin = require('rewire-webpack');

module.exports = function(config) {
  config.set({

    frameworks: ['mocha', 'chai'],

    files: [
      'test/cards.spec.js'
    ],

    preprocessors: {
      'test/*cards.spec.js': ['webpack']
    },

    reporters: ['progress'],

    colors: true,

    browsers: ['PhantomJS'],

    reporters: [ 'dots' ],

    webpack: {
      module: {
        loaders: [
          { test: /\.json$/, loader: 'json' },
          { test: /\.yml$/, loader: 'json!yaml' },
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.js$/, loader: 'babel'},
          { test: /\.js$/, loader: 'jsx' }
        ]
      },
      plugins: [new WebpackRewirePlugin()]
    },
  });
};
