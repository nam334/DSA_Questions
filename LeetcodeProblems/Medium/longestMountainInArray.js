// Input: arr = [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
// Example 2:

// Input: arr = [2,2,2]
// Output: 0
// Explanation: There is no mountain.
// var longestMountain = function (arr) {
//   if (!arr.length) return;
//   if (arr.length < 3) return 0;
//   let maxLength = 0,
//     bool = false,
//     maxArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     bool = false;
//     let res = [],
//       p = i,
//       q = i + 1;
//     while (arr[p] < arr[q]) {
//       let a = p,
//         b = q;
//       res.push(arr[p]);
//       a++;
//       b++;

//       while (arr[a] > arr[b]) {
//         bool = true;
//         res.push(arr[a]);
//         if (arr[a] > arr[b] && b === arr.length - 1) res.push(arr[b]);
//         a++;
//         b++;

//         if (arr[a] < arr[b]) res.push(arr[a]);
//       }
//       p++;
//       q++;
//     }
//     if (bool) {
//       console.log(res);
//       if (maxLength < res.length) {
//         maxArr = [];
//         maxLength = res.length;
//         maxArr = res;
//       }
//     }
//   }
//   console.log(maxLength, bool);
//   //if (!bool) return 0;
//   //else {
//   if (!maxArr.length) return 0;
//   return maxLength;
//   // }
// };

var longestMountain = function (arr) {
  if (!arr.length) return;
  const n = arr.length;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    let left = i - 1,
      right = i + 1;
    if (arr[i] > arr[left] && arr[i] > arr[right]) {
      while (left >= 0 && arr[left - 1] < arr[left]) left--;
      while (right < n && arr[right + 1] < arr[right]) right++;
      sum = Math.max(sum, right - left + 1);
    }
  }
  return sum;
};
// console.log(longestMountain([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]));
console.log(longestMountain([0, 0, 1, 0, 0, 1, 1, 1, 1, 1]));
