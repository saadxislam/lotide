const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ' + ${actual} + ' === ' + ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ' + ${actual} + ' !== ' + ${expected}`);
  }
};

//compare two arrays for a perfect match

const eqArrays = (array1, array2) => {
  let arrayLengthCheck = array1.length === array2.length;

  if (arrayLengthCheck){
    for (let i = 0; i < array1.length; i++){
      if (array1 [i] !== array2 [i]){
        return false;
      }
    }
  } 
  return true;
}

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS

eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false