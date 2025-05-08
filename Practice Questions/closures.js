// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
// }

// x();

function x() {
  for (var i = 1; i <= 5; i++) {
    console.log("i in for loop is", i);
    setTimeout(function () {
      console.log("i is", i);
    }, i * 1000);
  }
}

x();
