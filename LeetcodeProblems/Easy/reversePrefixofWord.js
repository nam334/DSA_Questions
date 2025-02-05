// Example 1:
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

// Example 2:
// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

// Example 3:
// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

var reversePrefix = function (word, ch) {
//     const idx = word.indexOf(ch);
//     if (idx === -1) {
//         return word;
//     }

//   let stack = [],
//     p = 0;
//   while (p < word.length) {
//     if (word[p] !== ch) stack.push(word[p]);
//     else {
//       while (stack.length !== 0) {
//         ch += stack.pop();
//       }
//     }
//     p++;
//   }
//   if (ch.length > 1) {
//     while (stack.length !== 0) {
//       ch += stack.shift();
//     }
//   }

//   if (ch.length === 1) return word;
//   return ch;
  const stack = []
    let reversed = false

    for(let i = 0; i < word.length; i++) {
        stack.push(word[i])
        if(word[i] === ch && !reversed) {
            stack.reverse()
            reversed = true
        }
    }

    return stack.join('')
};

console.log(reversePrefix("abcdefd", "d"));
