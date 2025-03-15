function sumOfSubarrayMinimum(arr) {
  let sum = 0,
    min = Infinity;
  res = [];
  n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      (res = []), (min = Infinity);
      for (let k = i; k <= j; k++) {
        res.push([arr[k]]);
      }
      for (let p = 0; p < res.length; p++) min = Math.min(min, res[p]);
      sum += min;
    }
  }
  return sum;
}

console.log(sumOfSubarrayMinimum([3, 1, 2, 4]));
