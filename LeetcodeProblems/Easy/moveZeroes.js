// Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

var moveZeroes = function (nums) {
  let start = 0,
    len = nums.length;
  end = 0;
  while (start < len) {
    if (nums[start] !== 0) {
      nums[end] = nums[start];
      end++;
    }
    start++;
  }
  for (let i = end; i < len; i++) nums[i] = 0;
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
