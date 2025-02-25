var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) return;
  let firstHalf = nums.slice(0, k + 1).reverse();
  let secondHalf = nums.slice(k + 1).reverse();
  console.log("first is", firstHalf, "sec is", secondHalf);
  let res = [...firstHalf, ...secondHalf].reverse();
  return res;
};
//console.log(rotate([-1, -100, 3, 99], 2));
//[3,99,-1,-100]
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
