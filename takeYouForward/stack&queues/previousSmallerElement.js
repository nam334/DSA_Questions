// arr = [4, 5, 2, 10, 8];
// o / p - [-1, 4, -1, 2, 2];

function previousSmallerElement(arr) {
  let n = arr.length,
    st = [],
    res = [];
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && st[st.length - 1] >= arr[i]) {
      st.pop();
    }
    if (st.length === 0) {
      res[i] = -1;
      st.push(arr[i]);
    } else {
      res[i] = st[st.length - 1];
      st?.push(arr[i]);
    }
  }
  return res;
}

console.log(previousSmallerElement([4, 5, 2, 10, 8]));
