// Given an input string , reverse the order of words
// I/p: "the sky is blue"
// O/p: "blue is sky the"

// I/p:" hello world "
// O/p:" world hello "

var reverseOrder = function (str) {
  let splitStr = str.split(" ");
  let stack = [],
    res = "";
  for (let i = 0; i < splitStr.length; i++) {
    stack.push(splitStr[i]);
  }
  console.log(stack);
  while (stack.length) {
    let curr = stack.pop();
    if (curr) res += " " + curr;
  }
  console.log(res);
  return res.trim();
};

// console.log(reverseOrder("the sky is blue"));
console.log(reverseOrder(" hello world "));
