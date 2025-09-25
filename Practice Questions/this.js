// "use strict";
// console.log("global this - ", this);

// function x() {
//   console.log("inside function this is - ", this);
// }

// x();
// window.x();

const student1 = {
  name: "Namrata",
};

function printName() {
  console.log(this.name);
}

const student2 = {
  name: "Reshmi",
};

window.name = "Window";
//student1.printName.call(student2);

//METHOD 1
// function myCall(fn, thisArg, ...args) {
//   thisArg.fn = fn;
//   const result = thisArg.fn(...args);
//   delete thisArg.fn;
//   return result;
// }

//METHOD 2
// Function.prototype.myCall = function (thisArg, ...args) {
//   const key = Symbol();
//   thisArg[key] = this;
//   const result = thisArg[key](...args);

//   delete thisArg[key];
//   return result;
// };

// myCall(printName, window);
// myCall(printName, student2);

//printName.myCall(student1);

//Symbol makes key at operating system level, no two symbols are same

//POLYFILL OF APPLY

// Function.prototype.myApply = function (thisArg, args = []) {
//   const key = Symbol();
//   thisArg[key] = this;
//   const result = thisArg[key](...args);
//   delete thisArg[key];
//   return result;
// };

// printName.myApply(student1);

//POLYFILL OF BIND

Function.prototype.myBind = function (...args) {
  let context = this,
    params = args.slice(1);
  console.log("params are - ", args);
  return function (...args2) {
    context.apply(args[0], [...params, ...args2]);
  };
};

let print = printName.myBind(student2);
print();
