let obj = {
  firstName: "Namrata",
  lastName: "Das",
};
function print(city, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. I'm from ${city}, ${state}.`
  );
}
let obj1 = {
  firstName: "prottay",
  lastName: "basu",
};

Function.prototype.mybind = function (obj, ...args) {
  if (typeof this !== "function") throw new Error("Not Callable");
  obj.fn = this;
  console.log(obj);
  return function (...args2) {
    obj.fn(...args, ...args2);
  };
};

let printAnother = print.mybind(obj, "Dibrugarh");
printAnother("Assam");
