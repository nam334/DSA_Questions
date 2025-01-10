// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute
//  difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Example 2:
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

var minimumAbsDifference = function (arr) {
  if (!arr.length) return;
  let min = Infinity,
    res = [];
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++)
    min = Math.min(min, arr[i + 1] - arr[i]);

  for (let i = 0; i < arr.length - 1; i++)
    if (min === arr[i + 1] - arr[i]) res.push([arr[i], arr[i + 1]]);
  return res;
};

// console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
console.log(minimumAbsDifference([40, 11, 26, 27, -20]));
