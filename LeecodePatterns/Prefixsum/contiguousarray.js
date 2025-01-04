// Given a binary array nums, return the maximum length of a contiguous subarray
// //with an equal number of 0 and 1.

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

var findMaxLength = function (nums) {
  if (!nums.length) return;
  let count = 0,
    res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) res[i] = nums[i];
    else res[i] = nums[i] + nums[i - 1];
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] + res[i + 1] === 1 || res[i] + res[i + 1] === 0) {
      console.log("res is", res);
      console.log([res[i], res[i + 1]]);
      count++;
    }
  }

  //   console.log(res, nums, count);
  return count;
};

console.log(findMaxLength([0, 1, 0]));
