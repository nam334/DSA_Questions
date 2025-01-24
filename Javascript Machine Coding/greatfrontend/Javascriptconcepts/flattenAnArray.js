const flatten = function (input) {
  if (!Array.isArray(input)) return;
  let res = [];
  input?.map((inp, index) => {
    if (Array.isArray(inp)) {
      res = [...res, ...flatten(inp)];
    } else res.push(inp);
  });
  return res;
};

// Single-level arrays are unaffected.
console.log(flatten([1, 2, 3]));
// [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
console.log(flatten([1, [2]]));
// // Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]]));
// // [1, 2, 3, 4, 5]
