var lengthOfLongestSubstring = function (s) {
  let max = 0,
    val = 0,
    myMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!myMap.has(s[i])) {
      val++;
      myMap.set(s[i], 1);
    } else {
      val--;
      if (val < 0) val = 0;
      let mapVal = myMap.get(s[i]);
      myMap.set(s[i], mapVal++);
    }
    max = Math.max(max, val);
  }
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
