// Given the array nums, for each nums[i] find out how many numbers in the array
// are smaller than it. That is, for each nums[i] you have to count the number of
//  valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.
// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

var smallerNumbersThanCurrent = function (nums) {
  if (!nums.length) return;
  let count = 0,
    res = [];
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] > nums[j]) count++;
      }
    }
    res.push(count);
  }
  return res;
};

// Input: nums = [8,1,2,2,3]
// [1,2,2,3,8]
// Output: [4,0,1,1,3]

// var smallerNumbersThanCurrent = function (nums) {
//   if (!nums.length) return;
//   let temp = nums;
//   nums = nums.sort((a, b) => a - b);
//   console.log("after sort", temp, nums);
//   let myMap = new Map(),
//     res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!myMap.has(nums[i])) myMap.set(nums[i], i);
//     else continue;
//   }

//   for (let i = 0; i < temp.length; i++) {
//     if (myMap.has(temp[i])) res.push(myMap.get(temp[i]));
//   }
//   return res;
// };

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
