function postfixToInfix(s) {
  let i = 0,
    n = s.length,
    st = [];
  while (i < n) {
    if (
      (s[i] >= "A" && s[i] <= "Z") ||
      (s[i] >= "a" && s[i] <= "z") ||
      (s[i] >= "0" && s[i] <= "9")
    ) {
      st.push(s[i]);
    } else {
      let t1 = st.pop();
      let t2 = st.pop();
      let str = "(" + t2 + s[i] + t1 + ")";
      st.push(str);
    }
    i++;
  }
  return st.pop();
}

console.log(postfixToInfix("AB-DE+F*/"));
