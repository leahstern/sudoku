var should = require('chai').should();
var expect = require('chai').expect;
var fs = require('fs');
var rewire = require('rewire');
var sfs = rewire('../tools/files.js'); //sudoku file system
var sinon = require('sinon');
var validator = require('../tools/validator.js');
var sampleData = {
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
}


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      ([1,2,3].indexOf(4)).should.be.equal(-1)
    });
  });
});

describe('Files', function() {
  beforeEach(function(){
    this.console = {
      log: sinon.spy() //"Reading from file ./sample.json"
    }
    sfs.__set__("console", this.console);
  });
  describe('write', function() {
    after(function(){
      fs.unlink('./sample2.json',function callbackNothing(){});
    });
    it('should create json file', function(){
      return sfs.write('./sample2.json',sampleData).then(function success(){
        fs.statSync('./sample2.json').size.should.equal(487);
      });
    })
  })
  describe('read', function(){
    it('should match sample data', function(){
        var _this = this;
        return sfs.read('./sample.json').then(function success(data){
          JSON.stringify(data).should.equal(JSON.stringify(sampleData));
          expect(_this.console.log.callCount).to.equal(1);
        });
    })
  })

});

describe('Validator', function(){
  it("should accept sample solution", function(){
      var solved = validator.solved(sampleData.solution);
      expect(solved).to.be.true;
  });
  it("should reject sample puzzle", function(){
    var solved = validator.solved(sampleData.puzzle);
    expect(solved).to.be.false;
  });
});
