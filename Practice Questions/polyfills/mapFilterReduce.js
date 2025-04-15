const arr = [2, 3, 4, 5, 8];

// Polyfill for map

// Array.prototype.myMap = function (func) {
//   let res = [];

//   //validate that func is a function
//   if (!typeof func === "function") throw new Error("Input is not a function");
//   for (let i = 0; i < this.length; i++) {
//     //handling sparse array
//     if (i in this) res.push(func(this[i]));
//   }
//   return res;
// };

// //Polfill of filter
Array.prototype.myFilter = function (func) {
  if (typeof func !== "function")
    throw new Error("Input is not of type function");

  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (func(this[i])) res.push(this[i]);
    }
  }
  return res;
};

const arrMap = arr.myFilter((el) => el >= 5);
console.log(arrMap);

// //Filter
// const arrFilter = arr.myFilter((el) => el < 4);
// console.log(arrFilter);

//Map
// const arrMap = arr.myMap((el) => el + 1);
// console.log(arrMap);

//reduce

//Polyfill of reduce

// Array.prototype.myreduce = function (func, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? func(this[i], acc) : this[i];
//   }
//   return acc;
// };

// const myreduce = arr.myreduce((el, sum) => el + sum, 0);
// console.log(myreduce);
