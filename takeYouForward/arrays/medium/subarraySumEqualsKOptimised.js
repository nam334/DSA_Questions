var subarraySumEqualsK = (nums, k) => {
  let mMap = new Map();
  let sum = 0,
    cnt = 0;
  mMap.set(0, 1);
  let i = 0;
  while (i < nums.length) {
    sum += nums[0];
    if (mMap.has(sum - k)) cnt += mMap.get(sum - k);

    if (!mMap.has(sum)) mMap.set(sum, 1);
    else mMap.set(sum, mMap.get(sum) + 1);
    i++;
  }
  return cnt;
};

console.log(subarraySumEqualsK([1], 0));
console.log(subarraySumEqualsK([1, 1, 1], 2));
