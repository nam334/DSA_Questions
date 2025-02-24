const arr = [1, 2, 4, 7, 7, 5];

// function largestSecondlargest(arr) {
//   let n = arr.length;
//   // First approach
//   let largest = arr[0];
//   for (let i = 1; i < n; i++) {
//     if (arr[i] > largest) largest = arr[i];
//   }
//   let sl = -1;
//   for (let j = 0; j < n; j++) {
//     if (arr[j] > sl && arr[j] !== largest) {
//       sl = arr[j];
//     }
//   }
//   return { largest, sl };
// }

function largestSecondlargestoptimised(arr) {
  let n = arr.length;
  // Optimised approach
  let largest = arr[0],
    sl = -1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      sl = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sl) sl = arr[i];
  }
  return { largest, sl };
}

console.log(largestSecondlargestoptimised(arr));
