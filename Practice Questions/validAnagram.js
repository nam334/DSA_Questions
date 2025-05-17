// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  let myMap = new Map();
  if (t.length !== s.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!myMap.has(s[i])) myMap.set(s[i], 1);
    else {
      let val = myMap.get(s[i]);
      myMap.set(s[i], ++val);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (myMap.has(t[i])) {
      let val = myMap.get(t[i]) - 1;
      myMap.set(t[i], val);
      if (myMap.get(t[i]) === 0) {
        myMap.delete(t[i]);
      }
    } else {
      myMap.set(t[i], 1);
    }
  }

  console.log(myMap);
  return !myMap.size > 0;
};

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("car", "rat"));
console.log(isAnagram("a", "abb"));
