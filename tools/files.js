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
    //returns JSON object
    try{
      let data = await fs.readFileAsync(filename, 'UTF-8');
      console.log(`Reading from file ${filename}`);
      return JSON.parse(data);
    } catch (err) {
        console.log("Error reading file");
      }
  }

  exports.write = function write(filename,data){
    //expects JSON object as data
    return fs.writeFileAsync(filename, JSON.stringify(data)).then(function(data){
      //written to disk
    });
  };
