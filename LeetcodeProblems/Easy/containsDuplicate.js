// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

// var containsDuplicate = function (nums) {
//   if (!nums.length) return;
//   nums = nums.sort((a, b) => a - b);
//   for (let p = 0; p < nums.length; p++) {
//     for (let q = p + 1; q < nums.length; q++) {
//       if (nums[p] === nums[q]) return true;
//     }
//   }
//   return false;
// };

// var containsDuplicate = function (nums) {
//   if (!nums.length) return;
//   let mySet = new Set(nums);
//   if (nums.length !== mySet.size) return true;
//   else return false;
// };

var containsDuplicate = function (nums) {
  if (!nums.length) return;
  let myMap = new Map();
  for (let i of nums) {
    if (myMap.has(i)) return true;
    myMap.set(i, true);
  }
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
