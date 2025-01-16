let obj = {
  firstName: "Namrata",
  lastName: "Das",
};
function print(city) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. I'm from ${city}.`
  );
}
let obj1 = {
  firstName: "prottay",
  lastName: "basu",
};

//Polyfill for apply method
Function.prototype.myapply = function (obj, ...args) {
  if (typeof this !== "function") throw new Error("Not Callable");
  if (!Array.isArray(...args)) throw new Error("Not of type array");
  obj.fn = this;
  obj.fn(...args);
};

print.myapply(obj, ["Kolkata"]);
