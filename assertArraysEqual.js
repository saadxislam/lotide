const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

//compare two arrays for a perfect match

const eqArrays = (array1, array2) => {
  let result = false;
  let arrayLengthCheck = array1.length === array2.length;

  if (arrayLengthCheck){
    for (let i = 0; i < array1.length; i++){
      if (array1 [i] === array2 [i]){
        result = true;
      } else {
        result = false;
      } 
    }
  } 
  return result;
}

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
