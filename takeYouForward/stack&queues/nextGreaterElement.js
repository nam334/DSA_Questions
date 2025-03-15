function nextGreaterElement(arr) {
  let res = [],
    n = arr.length,
    flag = false;
  for (let i = 0; i < n; i++) {
    flag = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        flag = false;
        res.push(arr[j]);
        break;
      }
    }
    if (flag) res.push(-1);
  }
  return res;
}

console.log(nextGreaterElement([1, 2, 3, 4, 3]));
