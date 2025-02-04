const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (fun) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(fun(this[i], i, this));
  }
  return temp;
};

const result = arr.myMap(function (ar) {
  return ar + 1;
});

// map(curr,if,array)
console.log(result);
