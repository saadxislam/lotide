const eqArrays = require('../eqArrays'); //i need the eqArray func itself
const assertEqual = require('../assertEqual'); //i need the assertEq func to assert
const assert = require('chai').assert;


// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL
// assertEqual (eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
// assertEqual (eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

describe("#eqArrays", () => {
  it('returns true when the arrays are equal', () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3]), true);
  });
  it('returns false when the arrays are not equal', () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3,4]), false);
  });
});