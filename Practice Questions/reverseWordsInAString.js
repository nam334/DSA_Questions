// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

function reverseWordsInAString(str) {
  let stack = [],
    result = "";
  for (let i = 0; i < str.length; i++) {
    let res = "",
      p = i;

    while (str[p] !== " " && p < str.length) {
      res += str[p];
      p++;
    }
    if (res.length > 0) stack.push(res);
    if (p > i) i = p;
  }

  while (stack.length) {
    result += stack.pop() + " ";
  }
  return result.trim();
}

console.log(reverseWordsInAString("the sky is blue"));
console.log(reverseWordsInAString("  hello world  "));
console.log(reverseWordsInAString("a good example"));
