const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
};

const eqArrays = (array1, array2) => {
  let result = false;
  let arrayLengthCheck = array1.length === array2.length;

  if (arrayLengthCheck){
    for (let i = 0; i < array1.length; i++){
      if (array1 [i] === array2 [i]){
        result = true;
      } else {
        result = false;
        break;
      } 
    }
  } 
  return result;
}


const letterPositions = function(line) {
  const results = {};
  for (let i = 0; i < line.length; i++) { // loopty doop
    if (results[line[i]]) {      // if the empty object has the key/property, say in LHL, the first key checked is 'L'
      results[line[i]].push(i);    // then add one more to it. if not move to else stmt below
    } else {
      results[line[i]] = [i];    // if the looped key/property does not exist, then create a key, and add 1 to it as a value.
    }
  }
  return results;
};

console.log(letterPositions('LHL'));
assertArraysEqual(letterPositions("LHL").L, [0, 2]);