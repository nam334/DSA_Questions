// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// var merge = function (nums1, m, nums2, n) {
//   for (let i = 0; i < nums2.length; i++) {
//     nums1[m] = nums2[i];
//     m++;
//   }
//   nums1.sort((a, b) => a - b);
//   return nums1;
// };

var merge = function (nums1, m, nums2, n) {
  let nums1copy = nums1.slice(0, m);
  let p1 = 0,
    p2 = 0;
  for (let i = 0; i < n + m; i++) {
    if (p2 >= n || (p1 < m && nums1copy[p1] < nums2[p2])) {
      nums1[i] = nums1copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
};

console.log(merge([1], 1, [], 0));
