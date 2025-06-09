// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
var moveZeroes = function (nums) {
  let n = nums.length;
  let numsCopy = nums.slice(0, n);
  let p1 = 0,
    p2 = 0;
  for (let i = 0; i < n; i++) {
    if (numsCopy[p2] !== 0) {
      nums[p1] = numsCopy[p2];
      p1++;
    }
    p2++;
  }
  for (let i = p1; i < n; i++) nums[i] = 0;
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
