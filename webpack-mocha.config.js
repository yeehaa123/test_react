var webpack = require('webpack');
var spawn = require('child_process').spawn;
var config = require('./config/mocha-config.js');
var child;

var compiler = webpack(config);

compiler.watch(200, function(err, stats){
  spawn('mocha', ['test/testBundle.js'], {stdio: 'inherit'})
    .on('exit', function(error){
      if(error !== null){
        console.log('error');
      }
    });
});
