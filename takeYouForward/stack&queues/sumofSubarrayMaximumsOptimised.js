function findNGE(arr) {
  let st = [],
    res = [],
    n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && arr[st[st.length - 1]] < arr[i]) st.pop();
    res[i] = st.length === 0 ? n : st[st.length - 1];
    st.push(i);
  }
  return res;
}
function findPGE(arr) {
  let st = [],
    res = [],
    n = arr.length;
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] <= arr[i]) st.pop();
    res[i] = st.length === 0 ? -1 : st[st.length - 1];
    st.push(i);
  }
  return res;
}

function sumofSubarrayMaximumOptimised(arr) {
  let sum = 0,
    n = arr.length;
  let nge = findNGE(arr);
  let pge = findPGE(arr);
  for (let i = 0; i < n; i++) {
    let left = i - pge[i];
    let right = nge[i] - i;
    sum += arr[i] * (left * right);
  }
  return sum;
}

console.log(sumofSubarrayMaximumOptimised([3, 1, 2, 4]));
