//MAP, FILTER AND REDUCE

const arr = [2, 3, 4, 5, 6];

// Array.prototype.myMap = function (fn) {
//   let newArr = [];
//   console.log("this is", this);
//   for (let i = 0; i < this.length; i++) {
//     let val = fn(this[i], i, this);
//     newArr.push(val);
//   }
//   return newArr;
// };

// const newArray = arr?.myMap((ar, index) => ar + 1);
// console.group(newArray);

// //FILTER

// Array.prototype.myfilter = function (fn) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     let val = fn(this[i], i, this);
//     val && newArray.push(this[i]);
//   }
//   return newArray;
// };

// const filteredArray = arr.myfilter((ar) => ar > 2);
// console.log(filteredArray, arr);

//REDUCE

Array.prototype.myReduce = function (fn, initialValue) {
  let accumulator,
    startIndex = 0;
  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    accumulator = fn(accumulator, this[i], i, this);
  }
  return accumulator;
};

const newArr = arr.myReduce((acc, ar) => acc * ar, 1);
console.log(newArr);
