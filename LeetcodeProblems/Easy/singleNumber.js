var singleNumber = function (nums) {
  if (!nums.length) return;
  let myMap = new Map(),
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    if (!myMap.has(nums[i])) myMap.set(nums[i], count);
    else myMap.set(nums[i], count + 1);
  }

  myMap.forEach((val, key) => {
    if (val === 1) res = key;
  });
  return res;
};

console.log(singleNumber([1]));
