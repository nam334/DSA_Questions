// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

//([{
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") stack.push(s[i]);
    else {
      if (
        (s[i] === ")" && stack.pop() !== "(") ||
        (s[i] === "]" && stack.pop() !== "[") ||
        (s[i] === "}" && stack.pop() !== "{")
      ) {
        return false;
      }
    }
  }
  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
