var lengthOfLongestSubstring = function (s) {
  let i = (j = 0),
    max = 0;
  let myMap = new Map();
  while (j < s.length) {
    if (myMap.has(s[j]) && myMap.get(s[j]) >= i) {
      let value = myMap.get(s[j]);
      i = value + 1;
    }
    myMap.set(s[j], j);
    max = Math.max(max, j - i + 1);
    j++;
  }
  return max;
};
