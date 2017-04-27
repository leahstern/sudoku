var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var ask = require('../entry.js');
// ask is promise-returning stdin question
var bddStdin = require('bdd-stdin');
describe('ask', function () {
  it('asks one question', function () {
    bddStdin('012345678');
    return ask.entry('type "answer"')
      .then(function (response) {
        console.assert(response === 'answer');
      });
  });
});
