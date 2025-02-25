// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

var intersection = function (nums1, nums2) {
  let visited = Array.from(nums2).fill(0),
    res = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      console.log(nums1[i] === nums2[j], nums1[i], nums2[j]);
      if (nums1[i] === nums2[j] && visited[j] === 0) {
        res.push(nums1[i]);
        console.log("res is", res);
        visited[j] = 1;
        break;
      }
      //   if (nums2[j] > nums1[i]) break;
    }
  }
  console.log(res);
  let myset = new Set(res);
  return Array.from(myset);
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
//console.log(intersection([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));
