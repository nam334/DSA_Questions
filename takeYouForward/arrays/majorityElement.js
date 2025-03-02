var majorityElement = function (nums) {
  if (!nums.length) return;
  let mMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(mMap);
    if (!mMap.has(nums[i])) mMap.set(nums[i], 1);
    else {
      let val = mMap.get(nums[i]);
      console.log("val is", val);
      mMap.set(nums[i], val + 1);
      if (mMap.get(nums[i]) > nums.length / 2) return nums[i];
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
