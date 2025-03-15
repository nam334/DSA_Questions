function rainWaterTapping(arr) {
  let l = 0,
    r = arr.length - 1,
    res = 0,
    maxL = arr[l],
    maxR = arr[r];
  while (l < r) {
    if (maxL < maxR) {
      l++;
      maxL = Math.max(maxL, arr[l]);
      res += maxL - arr[l];
    } else {
      r--;
      maxR = Math.max(maxR, arr[r]);
      res += maxR - arr[r];
    }
  }
  return res;
}

console.log(rainWaterTapping([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
