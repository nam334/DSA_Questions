// evaluate("sum")(4)(3)
// evaluate("multiply")(4)(3)
// evaluate("subtract")(4)(3)

// function curry(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "subtract") return a - b;
//       else return "invalid input";
//     };
//   };
// }

// console.log(curry("multiply")(2)(3));

//INFINITE CURRYING

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    else return a;
  };
}

console.log(add(5)(4)(2)(3)(1)());
