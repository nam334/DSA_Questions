// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// function mergeStringsAlternately(word1, word2) {
//   let res = [];
//   word1 = Array.from(word1);
//   word2 = Array.from(word2);
//   while (word1.length > 0 || word2.length > 0) {
//     res.push(word1.shift());
//     res.push(word2.shift());
//   }
//   return res.join("");
// }

// console.log(mergeStringsAlternately("abc", "pqr"));

//Optimised Solution

function mergeStringsAlternately(word1, word2) {
  let res = [],
    i = 0,
    j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) res.push(word1[i]);
    if (j < word2.length) res.push(word2[j]);
    i++;
    j++;
  }
  return res.join("");
}

console.log(mergeStringsAlternately("abc", "pqr"));
