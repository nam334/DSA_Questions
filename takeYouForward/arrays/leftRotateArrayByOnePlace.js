const arr = [1, 2, 3, 4, 5];

function leftRotateArrayByOnePlace(arr) {
  let p = arr[0]; //5
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = p;
  return arr;
}

console.log(leftRotateArrayByOnePlace(arr));
