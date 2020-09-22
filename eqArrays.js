const assertEqual = require('./assertEqual'); //i require the assert equal func to run here

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

module.exports =  eqArrays;