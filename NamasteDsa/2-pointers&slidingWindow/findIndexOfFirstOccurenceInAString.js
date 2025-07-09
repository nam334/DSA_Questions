// Given two strings needle and haystack, return the index of the first occurrence of needle
// in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// / Explanation: "leeto" did not occur in "leetcode", so we return -1.
var strStr = function (h, n) {
  let p = 0,
    q = 0;
  min = Infinity;
  (ind = -1), (cnt = 0);
  while (p < h.length) {
    if (h[p] === n[q]) {
      cnt++;
      //  console.log("cnt ", cnt, n.length);
      if (ind < 0) {
        ind = p;
      }
      if (cnt === n.length) min = Math.min(min, ind);
      p++;
      q++;
    } else {
      p++;
      q = 0;
      ind = -1;
      cnt = 0;
    }
  }
  //onsole.log(min);
  if (min === Infinity) return -1;
  else return min;
};

console.log(strStr("leetcode", "leeto"));
console.log(strStr("sadbutsad", "sad"));
