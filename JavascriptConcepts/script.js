let name = {
  firstname: "Namrata",
  lastName: "Das",
};

let printMyName = function (hometown, state, country) {
  console.log(
    `My name is ${this.firstname} ${this.lastName}. I'm from ${hometown} ${state} (${country}).`
  );
};

// printMyName.apply(name, ["Dibrugarh", "Assam"]);

// //bind

// let printName = printMyName.bind(name, "Patna", "Bihar");
// printName();

//POLYFILLS

//POYFILL FOR CALL
Function.prototype.mycall = function (obj, ...args) {
  if (typeof this !== "function") throw new Error("not callable");
  obj.fn = this;
  obj.fn(...args);
};

//POLYFILL FOR APPLY

Function.prototype.myapply = function (obj, ...args) {
  if (!Array.isArray(...args))
    throw new Error("Method called on non array onject");

  if (typeof this !== "function") throw new Error("Not callable");

  obj.fn = this;
  obj.fn(...args);
};

Function.prototype.myBind = function (obj, ...args) {
  //   console.log("obj is", obj);
  //   console.log("args is", ...args);
  //   console.log(this);
  let fn = this;
  return function (...arg) {
    console.log(...arg);
    fn.apply(obj, [...args, ...arg]);
  };
};

let printFunc = printMyName.myBind(name, "Dibrugarh", "Assam");
printFunc("India");
