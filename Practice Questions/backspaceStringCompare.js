function backspaceStringCompare(s, t) {
  return stringLength(s) === stringLength(t);
}

// function stringLength(str) {
//   let s = str.length - 1,
//     count = 0,
//     arr = [];
//   while (s >= 0) {
//     if (str[s] !== "#") {
//       while (count > 0) {
//         s--;
//         count--;
//       }

//       if (s > 0 && str[s] !== "#") arr.push(str[s]);
//     }
//     if (str[s] === "#") {
//       count++;
//     }
//     s--;
//   }
//   return arr.reverse().join("");
// }

// function stringLength(s) {
//   const res = [];
//   for (x of s.split("")) {
//     x === "#" ? res.pop() : res.push(x);
//   }
//   console.log(res.join(""));
//   return res.join("");
// }

function stringLength(s) {
  const stack = [];
  for (const char of s) {
    if (char === "#") {
      stack.length > 0 && stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
console.log(backspaceStringCompare("a#c", "b"));
console.log(backspaceStringCompare("ab##", "c#d#"));
console.log(backspaceStringCompare("a#c", "b"));
