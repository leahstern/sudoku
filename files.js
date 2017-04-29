  var Promise = require('bluebird');
  var fs = Promise.promisifyAll(require('fs'));
/*
  exports.read = function read(filename){
    fs.readFileAsync(filename, 'UTF-8').then(function(data){
      console.log(data)
      //return data
    })
  }
*/
  exports.read = async function read(filename){
    let data = await fs.readFileAsync(filename, 'UTF-8');
      console.log(data)
      //return data
    }

  exports.write = function write(filename,data){
    fs.writeFileAsync(filename, data).then(function(data){
      //written to disk
    })
  }
