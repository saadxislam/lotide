const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(line) {
  const letterWithCounts = {};
  for (let i = 0; i < line.length; i++) {
    if (letterWithCounts[line[i]]) {
      letterWithCounts[line[i]] += 1;
    } else {
      letterWithCounts[line[i]] = 1;
    }
  }
  return letterWithCounts;
};
  

console.log(countLetters('Lighthouse in the house')); //should return results indicating that L appears twice, and H once