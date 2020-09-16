const assertArraysEqual = function(array1, array2) {
  eqArrays(middle(array1), middle(array2)) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
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
  if (!arrayLengthCheck){
    return false;
  }
  return true;
}

//receive an array
//loop to get all of it's elements
// if the array.length is 1, or 2, then return []
// if array.length % 2 !== 0; return the middle number
// if array.length % 2 === 0; return the middle 2 numbers

const middle = function (array) {
  let newArray = [];
    if(array.length === 1 || array.length === 2){ //if array length is 1, 2 return empty array
      return newArray = [];
    }

  for (let i = 0; i < array.length; i++){
    if (array.length % 2 !== 0) { //if array lenght is odd no., return middle element
      newArray.push(array[Math.floor(array.length/2)]);
      return newArray;
      
    }
    else if (array.length % 2 === 0) { //if array lenght is even no., return middle two elements
      newArray.push(array[(array.length/2)-1]);
      newArray.push(array[array.length/2]); 
      console.log(newArray);
     return newArray;
    }
  }
}

// console.log(middle([1,2,3,4,5]));
 assertArraysEqual([1,2,3], [1,2,3,4]);
  