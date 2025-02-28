// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

var subarraySum = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let p = i,
      q = i + 1;

    if (nums[p] === k) count++;
    if (nums[q] === k) count++;
    if (nums[p] + nums[q] === k) count++;
    if (q === nums.length - 1) break;
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
