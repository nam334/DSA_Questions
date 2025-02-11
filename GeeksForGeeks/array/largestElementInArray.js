var largest = function (arr) {
  // code here
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
};

console.log(largest([1, 8, 7, 56, 90]));
