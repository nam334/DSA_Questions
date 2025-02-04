// Given a string s and an integer k, return the maximum number of vowel letters
// in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

var maxVowels = function (s, k) {
  let start = 0,
    end = 0,
    max = -1,
    count = 0;
  while (end < s.length) {
    if (
      s[end] === "a" ||
      s[end] === "e" ||
      s[end] === "i" ||
      s[end] === "o" ||
      s[end] === "u"
    ) {
      count++;
      if (max < count) max = count;
    }
    if (end - start + 1 < k) end++;
    else {
      if (
        s[start] === "a" ||
        s[start] === "e" ||
        s[start] === "i" ||
        s[start] === "o" ||
        s[start] === "u"
      ) {
        count--;
      }
      start++;
      end++;
    }
  }
  return max;
};

console.log(maxVowels("leetcode", 3));
