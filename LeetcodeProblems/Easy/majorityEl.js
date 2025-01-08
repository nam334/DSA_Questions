var majorityElement = function (nums) {
  if (!nums.length) return;
  let myMap = new Map(),
    max = 0,
    keyEl = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    if (!myMap.has(nums[i])) myMap.set(nums[i], count);
    else {
      let value = myMap.get(nums[i]);
      myMap.set(nums[i], (value += 1));
    }
  }
  console.log(myMap);
  myMap.forEach((values, keys) => {
    if (max < values) {
      max = values;
      keyEl = keys;
      console.log("key - ", keys, "values - ", values, "max - ", max);
    }
  });

  return keyEl;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
