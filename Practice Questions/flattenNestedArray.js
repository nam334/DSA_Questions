function flattenArray(arr, result) {
  // Your implementation

  if (!Array.isArray(arr)) return;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) result.push(arr[i]);
    else {
      flattenArray(arr[i], result);
    }
  }
  return result;
}

function flat(arr) {
  let result = [];
  return flattenArray(arr, result);
}

console.log(flat([1, 2, [3, 4], [6, 7, 8], 9]));
console.log(flat([["a"], ["b", ["c", "d"]], "e"]));
