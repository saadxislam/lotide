const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ' + ${actual} + ' === ' + ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ' + ${actual} + ' !== ' + ${expected}`);
  }
};

const head = function (arrays){
    return arrays[0];
};

assertEqual(head(["Hello"]), "Hello");
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), []);