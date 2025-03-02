const nums = [2, 2, 1, 1, 1, 2, 2];
var mooresVotingAlgorithm = (nums) => {
  let el,
    n = nums.length,
    cnt = 0;
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      el = nums[i];
      cnt = 1;
    }
    if (el === nums[i]) {
      cnt++;
    } else cnt--;
  }

  let cnt1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (el === nums[i]) cnt1++;
    if (cnt1 > nums.length / 2) return nums[i];
  }
};

console.log(mooresVotingAlgorithm(nums));
