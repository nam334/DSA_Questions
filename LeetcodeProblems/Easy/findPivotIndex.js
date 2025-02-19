var pivotIndex = function (nums) {
  let leftsum = 0,
    total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    let rightsum = total - leftsum - nums[i];
    if (leftsum === rightsum) return i;
    leftsum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
