// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  let stack = [];
  const str = s.replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i].toLowerCase());
  }

  for (let i = 0; i < str.length; i++) {
    let val = stack.pop();
    if (str[i].toLowerCase() !== val) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
//isPalindrome("A man, a plan, a canal: Panama");
