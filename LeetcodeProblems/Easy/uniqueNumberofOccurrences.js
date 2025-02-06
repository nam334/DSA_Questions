// Given an array of integers arr, return true if the number of occurrences of each value
// in the array is unique or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

var uniqueOccurrences = function (arr) {
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!myMap.has(arr[i])) myMap.set(arr[i], 1);
    else {
      let value = myMap.get(arr[i]);
      myMap.set(arr[i], (value += 1));
    }
  }

  let ar = Array.from(myMap.values());
  let myset = new Set(ar);
  //   for (let [key, value] of myMap) {
  //     ar.push(value);
  //     myset.add(value);
  //   }
  if (myset.size === ar.length) return true;
  else return false;
};

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
console.log(uniqueOccurrences([1, 2]));
