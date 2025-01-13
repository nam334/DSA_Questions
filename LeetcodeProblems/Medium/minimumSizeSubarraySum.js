// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

var minSubArrayLen = function (target, nums) {
  if (!nums.length) return;
  let p = nums.length - 1,
    q = p - 1,
    min = nums[p],
    count = 0,
    bool = false;
  while (q >= 0) {
    if (min === target) {
      count++;
      break;
    } else if (min + nums[q] <= target) {
      min = min + nums[q];
      count++;
      q--;
    } else if (min + nums[q] > target) {
      q--;
    }
    // console.log(min, count, bool, min === target, q);
  }
  console.log(min, q < 0);
  if (min === target && q < 0) return count + 1;
  else if (min === target && q >= 0) return count;
  else return 0;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(0, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));
