// Given a string s, you can transform every letter individually to be lowercase or uppercase
// to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]
var letterCasePermutation = function (s) {
  let mySet = new Set();
  for (let i = 0; i < s.length; i++) {
    let str = [];

    if (typeof s[i] === "string") {
      let temp = "",
        val = s;
      if (s[i] === s[i].toLowerCase()) {
        // console.log("s[i] lower", s[i]);
        temp = s[i].toUpperCase();
      }
      if (s[i] === s[i].toUpperCase()) {
        console.log("s[i] cap", s[i]);
        temp = s[i].toLowerCase();
        console.log("temp changed", temp);
      }
      //   console.log("temp", temp);
      let p = 0;
      while (p < s.length) {
        console.log("string", val[p]);
        str.push(val[p]);
        p++;
      }
      str[i] = temp;
      str = str.join("");
      // console.log("str is", "temp is", str, temp);
    }
    mySet.add(str);
  }
  // mySet.add(s);
  // mySet.add(s.toUpperCase());
  return Array.from(mySet);
  console.log(mySet);
};

console.log(letterCasePermutation("Jw"));
