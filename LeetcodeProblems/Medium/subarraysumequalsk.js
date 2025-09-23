var subarraySum = function (nums, k) {
  let sum = (count = 0);
  let myMap = new Map();
  myMap.set(0, 1);
  for (let i of nums) {
    sum += i;
    if (myMap.has(sum - k)) count += myMap.get(sum - k);
    myMap.set(sum, (myMap.get(sum) || 0) + 1);
  }
  return count;
};
