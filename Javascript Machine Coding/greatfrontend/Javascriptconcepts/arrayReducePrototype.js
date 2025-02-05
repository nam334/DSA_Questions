const arr = [1, 2, 3, 4, 5];
let sum = 10;

Array.prototype.myReduce = function (func, acc) {
  var initialValue = acc;
  for (let i = 0; i < this.length; i++) {
    initialValue = initialValue
      ? func(initialValue, this[i], i, this)
      : this[i];
  }
  return initialValue;
};

let result = arr.myReduce((acc, curr) => acc + curr, sum);
console.log(result);

students.filter((students) => students.marks < 60);
