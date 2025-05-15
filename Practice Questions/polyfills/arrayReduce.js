const arr = [1, , 3, 4];

Array.prototype.myreduce = function (fn, acc) {
  if (typeof fn !== "function") throw new TypeError("Input is not a function");

  if (this === null || this === "undefined" || this.length === 0)
    throw new TypeError("Input is not valid");

  let start = acc === undefined ? 1 : 0;
  acc = acc === undefined ? this[0] : acc;

  for (let i = start; i < this.length; i++) {
    if (i in this) acc = fn(acc, this[i], i, this);
  }
  return acc;
};

const res = arr?.myreduce((acc, sum) => acc + sum);
console.log(res);
