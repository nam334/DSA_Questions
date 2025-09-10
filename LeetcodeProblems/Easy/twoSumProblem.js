var twoSum = function (nums, target) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!myMap.has(target - nums[i])) myMap.set(nums[i], i);
    else {
      let index = myMap.get(target - nums[i]);
      return [index, i];
    }
  }
};
