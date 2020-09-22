// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ' + ${actual} + ' === ' + ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ' + ${actual} + ' !== ' + ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual'); //find the first element of an array

const head = function (arrays){
    return arrays[0];
};

module.exports = head;



