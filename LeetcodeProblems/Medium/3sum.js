// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// var threeSum = function(nums) {
//     if(!nums.length) return []

//     nums = nums.sort((a,b) => a - b)
//      let res = []
//     for(let p = 0; p< nums.length - 2; p++){
//         if(p > 0 && nums[p] === nums[p - 1]) continue

//         let q = p+1, r = nums.length - 1
//         while(q<r){
//             let sum = nums[p] + nums[q] + nums[r]
//             if(sum === 0){
//                 console.log("sum is", sum, nums[p])
//                 res.push([nums[p],nums[q],nums[r]])
//                  while(nums[q] === nums[q+1]) q++
//                   while(nums[r] === nums[r+1]) r--
//                 q++
//                 r--
//             }
//             else if(sum < 0)
//             q++
//             else
//             r--
//         }
//         console.log(res)

//     }

//     return res
// };

var threeSum = function (nums) {
  if (!nums.length) return;
  let mySet = new Set(),
    res = [],
    p = 0;
  while (p < nums.length) {
    let q = p + 1,
      r = p + 2;
    while (r < nums.length) {
      if (nums[p] + nums[q] + nums[r] === 0)
        mySet.add([nums[p], nums[q], nums[r]]);
      q++;
      r++;
    }
    p++;
  }

  res = Array.from(mySet);
  let temp = res[0][0],
    bool = false;
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i]?.length; j++) {
      if (temp !== res[i][j]) bool = true;
    }
  }

  if (bool) return res;
  else return [res[0]];
};

console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
