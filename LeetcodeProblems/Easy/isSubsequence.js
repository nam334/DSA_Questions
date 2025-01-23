// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by
// deleting some (can be none) of the characters without disturbing the relative positions of the
// remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function (s, t) {
  let l1 = s.length,
    l2 = t.length;
  let p = 0,
    q = 0,
    count = 0;
  while (p < l1 && q < l2) {
    if (s[p] === t[q]) {
      p++;
      q++;
      count++;
    } else q++;
  }

  return count === l1;
};
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
