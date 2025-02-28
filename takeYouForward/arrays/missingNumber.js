// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number
// in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number
//  in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since
// it does not appear in nums.
//0 1 3
var missingNumber = function (nums) {
  if (!nums.length) return;
  if (nums.length === 1 && nums[0] === 1) return 0;
  if (nums.length === 1 && nums[0] === 0) return 1;
  nums = nums.sort((a, b) => a - b);
  let val = nums[0];
  if (val !== 0) return 0;
  i = 1;

  while (val < nums.length) {
    if (val + 1 !== nums[i]) return val + 1;
    val++;
    i++;
  }
};
console.log(missingNumber([1, 2]));
