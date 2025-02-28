const arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];

var sortAnArray = function (nums) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    if (nums[i] === 1) count1++;
    if (nums[i] === 2) count2++;
  }
  console.log("0's are", count0, "1's are", count1, "2's are", count2);
  for (let i = 0; i < count0; i++) nums[i] = 0;
  for (let i = count0; i < count0 + count1; i++) nums[i] = 1;
  for (let i = count0 + count1; i < nums.length; i++) nums[i] = 2;
  return arr;
};

console.log(sortAnArray(arr));
