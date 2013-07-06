var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

// check it , should syntax :)

// https://github.com/visionmedia/should.js
// a bit more expressive?

// also install chai since it allows us to 
// play arround with diff assertion libraries
// http://chaijs.com/

var should = require('chai').should();
describe("Array#indexOf()", function(){
	it("should return -1 when value is not presente", function(){
		([4,5,6]).indexOf(7).should.equal(-1);
	})
})
