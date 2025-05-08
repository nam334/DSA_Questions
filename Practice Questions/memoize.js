const add = (a, b, c) => a + b + c;
const memoize = (fn) => {
  let cache = {};
  return function (...args) {
    let arg = JSON.stringify(args);
    if (arg in cache) {
      console.log("from cache");
      return cache[arg];
    } else {
      console.log("Calculating first time");
      let result = fn.apply(this, args);
      cache[arg] = result;
      return result;
    }
  };
};
const addNumbers = memoize(add);
console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 2, 3));
