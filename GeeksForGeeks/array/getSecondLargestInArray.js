var getSecondLargest = function (arr) {
  arr = arr.sort((a, b) => b - a);
  let myset = new Set(arr);
  return myset.size === 1 ? -1 : Array.from(myset)[1];
};

console.log(getSecondLargest([12, 35, 1, 10, 34, 1]));
