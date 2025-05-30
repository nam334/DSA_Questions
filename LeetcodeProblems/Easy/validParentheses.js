// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

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
var isValid = function (s) {
  let stack = [],
    closingbraces = false,
    openingbraces = false;
  function isEmpty() {
    return stack.length === 0;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      openingbraces = true;
    } else {
      if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
        if (isEmpty()) return false;
        let peek = stack.pop();

        if (
          (peek === "(" && s[i] !== ")") ||
          (peek === "{" && s[i] !== "}") ||
          (peek === "[" && s[i] !== "]")
        ) {
          return false;
        }
      }
      closingbraces = true;
    }
  }

  if (stack.length > 0) return false;
  return true;
};

// console.log(isValid("()[]{}"));
// console.log(isValid("()"));
console.log(isValid("[[[]"));
