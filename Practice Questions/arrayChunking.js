// function chunkArray(arr, n) {
//   // Your implementation
//   let res = [];
//   if (arr.length < n) {
//     res.push(arr);
//     return res;
//   } else {
//     while (arr?.length > 0) {
//       let ar = [];
//       for (let i = 0; i < n; i++) {
//         if (arr[i]) ar?.push(arr.shift());
//       }
//       console.log("ar", ar);
//       res.push(ar);
//     }
//     //   console.log("res", res);
//     return res;
//   }
// }

function chunkArray(arr, n) {
  // Your implementation
  let res = [];

  while (arr?.length > 0) {
    let ar = [];
    //5
    for (let i = 0; i < n; i++) {
      if (arr?.length) ar?.push(arr.shift());
    }
    console.log("ar", ar);
    res.push(ar);
  }
  //   console.log("res", res);
  return res;
}

console.log(chunkArray([1, 2, 3], 5));
