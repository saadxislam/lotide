const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }



//compare two arrays for a perfect match


const eqArrays = require('./eqArrays');
module.exports  = assertArraysEqual;

