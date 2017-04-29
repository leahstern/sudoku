var assert = require('assert');
var should = require('should')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      //assert.equal(-1, [1,2,3].indexOf(4));
      ([1,2,3].indexOf(4)).should.equal(-1)
    });
  });
});

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
