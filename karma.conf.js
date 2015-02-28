var webpackConfig = require('./webpack-karma.config')
module.exports = function(config) {
  config.set({

    frameworks: ['mocha', 'sinon-chai'],

    files: [
      'test/**/*.spec.js'
    ],

    preprocessors: {
      'test/**/*.spec.js': ['webpack']
    },

    reporters: ['progress'],

    colors: true,

    browsers: ['PhantomJS'],

    reporters: [ 'dots' ],
    webpack: webpackConfig

  });
};
