const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};                              //empty object to store the contents of the for loop
  for (let item of allItems) {                      // looping thru all the items in firstNames as it was passed thru allItems
    if (itemsToCount[item]) {                       // if the name we just looped, is in the items to count array
      if (results[item]) {                           // if, say Fang, is in the results object we just created above (it's not because empty), so jump to line 17, and create a key with Jason, and value of 1
        results[item] += 1;                          // for fang, the first time it found it in the loop, it created one instance in results obj, not line 15 will be true, so it'll increment that count by 1
      } else {                                         // come here if the current name you looped on is not in the results obj
        results[item] = 1;                            // create a key, says results[item] is Fang, and it wasnt in results obj, so create "Fang: 1"
      }
    }
    
  }
  return results;                                     // returns results obj with 'Name: how many times it occurs"
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// call countOnly, pass in this array of names, and this one object with keys as names and value as true/false
//
  
//below, result1 is now an object with the contents of "results". so for line 45, you're saying result1 has a key Jason, and it happens 1 time. if it does, then it'll pass the assertion.
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);