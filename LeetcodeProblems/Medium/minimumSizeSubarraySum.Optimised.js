var minSubArrayLen = function (target, nums) {
  if (!nums.length) return;
  let left = 0,
    right = 0,
    sum = 0,
    result = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      let len = right - left + 1;
      if (result === 0 || len < result) result = len;
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 5]));
