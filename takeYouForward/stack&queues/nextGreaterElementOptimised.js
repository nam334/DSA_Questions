function nextGreaterElementOptimised(arr) {
  let n = arr.length,
    st = [],
    res = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && arr[i] >= st[st.length - 1]) st.pop();
    if (st.length === 0) res[i] = -1;
    else res[i] = st[st.length - 1];
    st.push(arr[i]);
  }
  return res;
}

console.log(nextGreaterElementOptimised([6, 0, 8, 1, 3]));
console.log(nextGreaterElementOptimised([4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]));
