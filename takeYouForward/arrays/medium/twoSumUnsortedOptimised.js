var twoSumUnsortedOptimised = function (nums, target) {
  let myMap = new Map();
  let i = 0;
  while (i < nums.length) {
    let diff = target - nums[i];
    if (!myMap.has(diff)) myMap.set(nums[i], i);
    else return [myMap.get(diff), i];
    i++;
  }
};

console.log(twoSumUnsortedOptimised([3, 2, 4], 6));
