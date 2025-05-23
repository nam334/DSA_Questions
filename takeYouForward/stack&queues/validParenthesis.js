// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") st.push(s[i]);
    else {
      if (st.length === 0) return false;
      let top = st.pop();
      console.log(top, s[i]);
      if (
        (s[i] === ")" && top !== "(") ||
        (s[i] === "}" && top !== "{") ||
        (s[i] === "]" && top !== "[")
      ) {
        return false;
      }
    }
    console.log(st);
  }
  if (st.length !== 0) return false;
  else return true;
};

console.log(isValid("()"));
