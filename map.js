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
  const assertArraysEqual = function(array1, array2) {
    eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }

const words = ['ground', 'control', 'to', 'major', 'tom'];
const newWords = ['great', 'country', 'to', 'make', 'toys'];
const newerWords = ['this', 'will', 'not', 'match', 'today'];

const map = (array, callback) => {
  const results = [];
  // console.log('array', array);
  // console.log('callback: ', callback);
  for (let i = 0; i < array.length; i++){
    results.push(callback(array[i]))
  }
return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(newWords, word => word[0]);
console.log(results2);

const results3 = map(newerWords, word => word[0]);
console.log(results3);



assertArraysEqual(results1, results3);