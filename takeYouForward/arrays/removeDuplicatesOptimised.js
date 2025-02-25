const arr = [1, 1, 2, 2, 2, 3, 3];

function removeDuplicateOptimised(arr) {
  let p = 0;
  for (let q = 1; q < arr.length; q++) {
    if (arr[q] !== arr[p]) {
      arr[p + 1] = arr[q];
      p++;
    }
  }
  return p + 1;
}

console.log(removeDuplicateOptimised(arr));
