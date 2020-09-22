const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


// assertArraysEqual([1,2,3], [1,2,3,4]); //false
// assertArraysEqual([1,2,3,4], [1,2,3,4]); //true

// middle([1,2,3,4,5]);
// console.log('middle([1,2,3,4,5]); :', middle([1,2,3,4,5]));
// middle([1,2,3,4,5,6]);
// console.log('middle([1,2,3,4,5,6]) :', middle([1,2,3,4,5,6]));

describe("#middleTest", () => {
  it('returns the middle value for an odd numbered array', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('returns the 2 middle values for an even numbered array', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});
