// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

var containsDuplicate = function (nums) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) return true;
    myMap.set(nums[i], i);
  }

  return false;
};

//console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
