const arr = [6, 2, 10, 1, 50];

Array.prototype.myFilter = function (func) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const res = arr.myFilter((value) => value > 8);
console.log(res);
