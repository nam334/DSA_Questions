var lengthOfLastWord = function (s) {
  let length = s.length - 1,
    count = 0;

  if (s.trim().length === 1) return 1;

  while (length >= 0) {
    if (s[length] !== " ") {
      let p = length;
      while (s[p] !== " " && p >= 0) {
        count++;
        p--;
      }
      if (count > 0) return count;
    }

    length--;
  }
};

console.log(lengthOfLastWord("day"));
