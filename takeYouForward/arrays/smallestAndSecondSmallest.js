const arr = [1, 4, 7, 7, 5, 2];

function smallestAndSecondSmallest(arr) {
  let n = arr.length;
  //   //brute force
  //   arr = arr.sort((a, b) => a - b);
  //   return [arr[0], arr[1]];

  //   //better solution
  //   let smallest = arr[0],
  //     ss = 1000;
  //   for (let i = 1; i < n; i++) {
  //     if (arr[i] < smallest) smallest = arr[i];
  //   }
  //   for (let i = 0; i < n; i++) {
  //     if (arr[i] < ss && arr[i] !== smallest) ss = arr[i];
  //   }
  //   return [smallest, ss];

  //best/ optimised solution
  let smallest = arr[0],
    ss = 1000;
  for (let i = 1; i < n; i++) {
    if (arr[i] < smallest) {
      ss = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < ss) {
      ss = arr[i];
    }
  }
  return [smallest, ss];
}

console.log(smallestAndSecondSmallest(arr));
