const eqArray = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
// const assert = require('chai').assert;


assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // false 
assertArraysEqual(["3", "2", "3"], ["1", "2", "3"]); // false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true

// describe("#AssertEqualArrays", () => {
//   it("Returns true when two arrays are equal", () => {
//     assert.deepEqual(assertArraysEqual(["3", "2", "3"], ["1", "2", "3"]), false);
//   });
//   it("Returns true when two arrays are equal", () => {
//     assert.deepEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);
//   });

// });
