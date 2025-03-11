function infixToPosfix(s) {
  let i = 0,
    st = [],
    n = s.length;
  ans = "";
  while (i < n) {
    if (
      (s[i] >= "A" && s[i] <= "Z") ||
      (s[i] >= "a" && s[i] <= "z") ||
      (s[i] >= "0" && s[i] <= "9")
    )
      ans += s[i];
    else if (s[i] === "(") st.push(s[i]);
    else if (s[i] === ")") {
      while (st.length > 0 && st[st.length - 1] !== "(") {
        ans += st.pop();
      }
      st.pop();
    } else {
      while (st.length > 0 && priority(st[st.length - 1]) >= priority(s[i])) {
        ans += st.pop();
      }
      st.push(s[i]);
    }
    i++;
  }
  while (st.length > 0) {
    ans += st.pop();
  }
  return ans;
}

function priority(s) {
  if (s === "^") return 3;
  else if (s === "*" || s === "/") return 2;
  else if (s === "+" || s === "-") return 1;
  else return -1;
}

console.log(infixToPosfix("a+b*(c^d-e)"));
