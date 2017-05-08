var should = require('chai').should();

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      //assert.equal(-1, [1,2,3].indexOf(4));
      ([1,2,3].indexOf(4)).should.be.equal(-1)
    });
  });
});
/*
var entry = require('../sudoku.js');
// entry is promise-returning stdin question
var bddStdin = require('bdd-stdin');
pry = require('pryjs')
var Promise = require('bluebird');
Promise.promisifyAll(entry);

describe('Entry', function () {
  it('asks one question', function () {
    //eval(pry.it)
    bddStdin('012345678');
    return entry.entryAsync('type "012345678"')
      .then(function (response) {
        (response).should.equal('answer');
      });
      done();
  });
});
*/

describe('Files', function() {
  describe('write', function() {
    it('should create json file', function(){
      var sfs = require('../files.js')
      var fs = require('fs');
      return sfs.write('./sample2.json',{
          "version": "http://ipuz.org/v2",
          "kind": [ "http://ipuz.org/sudoku#1" ],
          "charset": "123456789",
          "boxes": true,
          "puzzle": [ [ 0, 1, 2, 0, 0, 7, 0, 0, 0 ],
                      [ 8, 0, 0, 9, 0, 0, 0, 0, 6 ],
                      [ 5, 0, 0, 0, 4, 0, 2, 0, 0 ],
                      [ 0, 4, 0, 0, 0, 1, 0, 0, 0 ],
                      [ 0, 7, 5, 0, 0, 0, 6, 2, 0 ],
                      [ 0, 0, 0, 6, 0, 0, 0, 8, 0 ],
                      [ 0, 0, 6, 0, 3, 0, 0, 0, 7 ],
                      [ 1, 0, 0, 0, 0, 9, 0, 0, 5 ],
                      [ 0, 0, 0, 1, 0, 0, 3, 4, 0 ] ],
          "solution": [ [ 9, 1, 2, 5, 6, 7, 4, 3, 8 ],
                        [ 8, 3, 4, 9, 1, 2, 5, 7, 6 ],
                        [ 5, 6, 7, 3, 4, 8, 2, 1, 9 ],
                        [ 6, 4, 8, 7, 2, 1, 9, 5, 3 ],
                        [ 3, 7, 5, 8, 9, 4, 6, 2, 1 ],
                        [ 2, 9, 1, 6, 5, 3, 7, 8, 4 ],
                        [ 4, 8, 6, 2, 3, 5, 1, 9, 7 ],
                        [ 1, 2, 3, 4, 7, 9, 8, 6, 5 ],
                        [ 7, 5, 9, 1, 8, 6, 3, 4, 2 ] ]
      }).then(function success(){
        fs.statSync('./sample2.json').size.should.equal(487);
      //}, function failure(){
      //  console.log ('Error writing to file');
      });
    })
  })
  describe('read', function(){
    it('should match test data', function(){
        var sfs = require('../files.js')
        var fs = require('fs');
        sfs.read('./sample.json').then(function success(data){
          JSON.stringify(data).should.equal(JSON.stringify({
              "version": "http://ipuz.org/v2",
              "kind": [ "http://ipuz.org/sudoku#1" ],
              "charset": "123456789",
              "boxes": true,
              "puzzle": [ [ 0, 1, 2, 0, 0, 7, 0, 0, 0 ],
                          [ 8, 0, 0, 9, 0, 0, 0, 0, 6 ],
                          [ 5, 0, 0, 0, 4, 0, 2, 0, 0 ],
                          [ 0, 4, 0, 0, 0, 1, 0, 0, 0 ],
                          [ 0, 7, 5, 0, 0, 0, 6, 2, 0 ],
                          [ 0, 0, 0, 6, 0, 0, 0, 8, 0 ],
                          [ 0, 0, 6, 0, 3, 0, 0, 0, 7 ],
                          [ 1, 0, 0, 0, 0, 9, 0, 0, 5 ],
                          [ 0, 0, 0, 1, 0, 0, 3, 4, 0 ] ],
              "solution": [ [ 9, 1, 2, 5, 6, 7, 4, 3, 8 ],
                            [ 8, 3, 4, 9, 1, 2, 5, 7, 6 ],
                            [ 5, 6, 7, 3, 4, 8, 2, 1, 9 ],
                            [ 6, 4, 8, 7, 2, 1, 9, 5, 3 ],
                            [ 3, 7, 5, 8, 9, 4, 6, 2, 1 ],
                            [ 2, 9, 1, 6, 5, 3, 7, 8, 4 ],
                            [ 4, 8, 6, 2, 3, 5, 1, 9, 7 ],
                            [ 1, 2, 3, 4, 7, 9, 8, 6, 5 ],
                            [ 7, 5, 9, 1, 8, 6, 3, 4, 2 ] ]
          }));
        //},function failure(){
        //  console.log('Error reading file');
        });
    })
  })

});

describe('validate', function(){
  it("should accept sample solution");
  it("should reject sample puzzle");
});
