var webpackConfig = require('./webpack-karma.config')


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
    webpack: webpackConfig

  });
};
