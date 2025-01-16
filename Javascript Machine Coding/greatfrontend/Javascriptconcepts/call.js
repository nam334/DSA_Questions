let obj = {
  firstname: "namrata",
  lastname: "das",
};

let objnew = {
  firstname: "priya",
  lastname: "das",
};

function print() {
  console.log(`my name is ${this.firstname} ${this.lastname}`);
}

Function.prototype.myCall = function (obj, ...args) {
  if (typeof this !== "function") throw new Error("Not callable");
  obj.fn = this;
  obj.fn(args);
};
print.myCall(objnew);
