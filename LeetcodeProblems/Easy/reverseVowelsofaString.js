// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases,
//  more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function (s) {
  let start = 0,
    end = s.length - 1;
  let str = s.split("");
  vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  while (start <= end) {
    if (!vowels.includes(str[start])) {
      start++;
    } else if (!vowels.includes(str[end])) {
      end--;
    } else {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  }
  return str.join("");
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
