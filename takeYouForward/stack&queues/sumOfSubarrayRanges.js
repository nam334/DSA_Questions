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

function sumOfSubarrayRanges(arr) {
  let minSum = sumofSubarrayMinimumsOptimised(arr);
  let maxSum = sumofSubarrayMaximumOptimised(arr);
  return maxSum - minSum;
}

console.log(sumOfSubarrayRanges([1, 3, 3]));
