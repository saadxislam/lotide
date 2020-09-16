const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(line) { //function that takes a line
  const letterWithCounts = {};        // empty object to store the key value pairs from the loop below
  for (let i = 0; i < line.length; i++) { // loopty doop
    if (letterWithCounts[line[i]]) {      // if the empty object has the key/property, say in LHL, the first key checked is 'L' 
      letterWithCounts[line[i]] += 1;    // then add one more to it. if not move to else stmt below
    } else {
      letterWithCounts[line[i]] = 1;    // if the looped key/property does not exist, then create a key, and add 1 to it as a value. 
    }
  }
  return letterWithCounts;              // return the object. 
};
  

console.log(countLetters('Lighthouse in the house')); //should return results indicating that L appears twice, and H once