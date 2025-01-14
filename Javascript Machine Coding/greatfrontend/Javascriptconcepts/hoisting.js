// // // console.log(test);
// // // console.log(x);
// // // var test = function func() {
// // //   console.log("namrata das");
// // // };

// // a();
// // console.log(b);
// // function a() {
// //   var x = 10;
// //   console.log(x);
// // }

// // function b() {
// //   var x = 100;
// //   console.log(x);
// // }

// console.log(a);
// let a = 10;
// let b = 100;
// var c = 1000;

// console.log(a);
// console.log(b);
// console.log(c);
// greet();
// function greet() {
//   console.log("Hello!");
// }

if (true) {
  var x = 10; // Function-scoped
  let y = 20; // Block-scoped
}
console.log(x); // 10
console.log(y); // ReferenceError
