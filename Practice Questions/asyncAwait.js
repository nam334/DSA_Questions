// const pr1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Promise resolved 1");
//   }, 5000);
// });

// const pr2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Promise resolved 2");
//   }, 10000);
// });
// async function getData() {
//   console.log("Namaste Javascript Before");
//   const val1 = await pr1;
//   console.log(val1);
//   console.log("Namaste Javascript after Pr1");

//   const val2 = await pr2;
//   console.log(val2);
//   console.log("Namaste Javascript after Pr2");
// }

// getData();

// // function getData() {
// //   pr1.then((res) => console.log(res));
// //   console.log("Namaste Javascript Before");
// // }

console.log("Start");

async function foo() {
  console.log("Inside foo");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise resolved");
      resolve();
    }, 3000);
  });

  console.log("After await");
}

foo();

console.log("End");
