  var Promise = require('bluebird');
  var fs = Promise.promisifyAll(require('fs'));

  exports.read = function read(filename){
    fs.readFileAsync(filename, 'UTF-8').then(function(data){
      console.log(data)
    })
  }
