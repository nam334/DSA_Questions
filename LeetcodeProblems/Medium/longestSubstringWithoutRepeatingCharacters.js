// Given a string s, find the length of the longest substring
//  without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    max = 0;
  let myset = new Set();
  while (r < s.length) {
    while (myset.has(s[r])) {
      myset.delete(s[l]);
      l++;
    }
    myset.add(s[r]);
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("aab"));
