// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

var characterReplacement = function (s, k) {
  let count = new Array(26).fill(0);
  let left = 0,
    maxFreq = 0,
    maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    const idx = s.charCodeAt(right) - 65;
    count[idx]++;
    maxFreq = Math.max(maxFreq, count[idx]);
    while (right - left + 1 - maxFreq > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
