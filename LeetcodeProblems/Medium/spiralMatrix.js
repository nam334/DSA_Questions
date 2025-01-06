// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
var spiralOrder = function (matrix) {
  let res = [],
    count = 0;
  while (matrix.length) {
    res.push(...matrix.shift());
    if (matrix && matrix[0] !== undefined) {
      for (let i = 0; i < matrix.length; i++) {
        res.push(matrix[i].pop());
      }
    }

    if (matrix && matrix[0]) {
      let lastEl = matrix.pop();
      res.push(...lastEl.reverse());
    }

    if (matrix && matrix[0] !== undefined) {
      let temp = [];
      for (let i = 0; i < matrix.length; i++) {
        let firstEl = matrix[i].shift();
        temp.push(firstEl);
      }
      res.push(...temp.reverse());
    }
    count++;
  }
  res = res.filter((item) => item);
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ])
);

// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//     [17, 18, 19, 20],
//     [21, 22, 23, 24],
//   ])
// );
// console.log(spiralOrder([[1]]));
