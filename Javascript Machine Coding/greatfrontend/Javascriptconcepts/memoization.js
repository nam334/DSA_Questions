const memo = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("from cache", cache[n]);
      return cache[n];
    } else {
      console.log("calc first time");
      let res = fun(n);
      cache[n] = res;
      console.log("saved in cache", cache);
      return res;
    }
  };
};

const calc = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
};

console.time();
const mymemo = memo(calc);
console.log(mymemo(5));
console.timeEnd();

console.time();
console.log(mymemo(5));
console.timeEnd();
