//var entry = require('./entry.js')
var sfs = require('.tools/files.js')

var data = null;
//entry.entry();
async function readSudoku(){
  data = await sfs.read('./sample.json');
  console.log(data.puzzle);
  writeSudoku();
}

async function writeSudoku(){
  sfs.write('./sample2.json',data);
}

readSudoku();
