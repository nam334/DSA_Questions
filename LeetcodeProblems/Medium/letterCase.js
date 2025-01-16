var letterCasePermutation = function (s) {
  let output = [""];
  for (let i = 0; i < s.length; i++) {
    let temp = [];
    if (typeof s[i] === "string") {
      for (let j = 0; j < output.length; j++) {
        temp.push(output[j] + s[i].toLowerCase());
        temp.push(output[j] + s[i].toUpperCase());
      }
    } else {
      for (let j = 0; j < output.length; j++) temp.push(output[j] + s[i]);
    }
    output = temp;
  }
  let myset = new Set(output);
  return Array.from(myset);
};

console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("Jw"));
