function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(10)(20)(30));

//example of currying

let obj = {
  firstname: "Namrata",
  lastname: "Das",
};

function print(ob) {
  return function (args) {
    return ob[args];
  };
}

let res = print(obj);
console.log(res("firstname"));

//Infinite currying

function fun(a) {
  return function (b) {
    if (b) return fun(a + b);
    else return a;
  };
}

console.log(fun(10)(20)(30)(40)(50)(1)(2)(3)());
