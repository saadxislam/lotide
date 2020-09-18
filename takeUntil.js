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






const takeUntil = (array, callBack) => { //
  let result = [];
  for (let element of array) {
    if (callBack(element)) {
      return result;
    }
    result.push(element);
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, results2);