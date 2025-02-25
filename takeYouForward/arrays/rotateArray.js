// var rotate = function (nums, k) {
//   let arr = [],
//     n = nums.length - 1;
//   let index = n - k + 1;
//   while (index <= n) {
//     arr.push(nums[index]);
//     index++;
//   }
//   let i = 0;
//   while (i <= n - k) {
//     arr.push(nums[i]);
//     i++;
//   }
//   nums.length = 0;
//   nums.push(...arr);
//   return nums;
// };
var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) return;
  if (nums.length === 1) return nums;
  let temp = [],
    n = nums.length;
  for (let i = n - k; i < n; i++) temp.push(nums[i]);
  console.log(n - 1, k);
  for (let i = n - 1; i >= k; i--) nums[i] = nums[i - k];

  for (let i = 0; i < k; i++) nums[i] = temp[i];
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));
