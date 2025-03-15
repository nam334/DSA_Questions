function findNSE(arr) {
  let st = [],
    n = arr.length,
    res = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) st.pop();
    res[i] = st.length === 0 ? n : st[st.length - 1];
    st.push(i);
  }
  return res;
}
function findPSEE(arr) {
  let st = [],
    n = arr.length,
    res = [];
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) st.pop();
    res[i] = st.length === 0 ? -1 : st[st.length - 1];
    st.push(i);
  }

  return res;
}
function sumofSubarrayMinimumsOptimised(arr) {
  let nse = findNSE(arr);
  let pse = findPSEE(arr);
  let n = arr.length,
    sum = 0;
  for (let i = 0; i < n; i++) {
    let left = i - pse[i];
    let right = nse[i] - i;
    sum += arr[i] * (left * right);
  }
  return sum;
}

console.log(sumofSubarrayMinimumsOptimised([3, 1, 2, 4]));
