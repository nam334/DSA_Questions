// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers
// //are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
// 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
// 8 is the missing number in the range since it does not appear in nums.

//0 1 2 3 4 5 6 7 9

//0 1

//1
// if (nums.length === 1) {
//     if (nums[0] > 0) return 0;
//     else return 1;
//   }

var missingNumber = function (nums) {
  if (!nums.length) return;
  nums = nums.sort((a, b) => a - b);
  console.log("sort", nums);
  let i = 0;
  while (i <= nums.length) {
    if (nums[i] === i) i++;
    else {
      console.log("inside els", i);
      if (nums[0] !== 0) return 0;
      else return i;
    }
  }
};

console.log(
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);
