// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

var maxProduct = function (arr) {
  let max = 0,
    product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (product <= 0) product = 1;
    product = product * arr[i];

    max = Math.max(max, product);
    console.log("product is", product, "max is", max);
  }
  return max;
};

console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([2, 3, -2, 4]));
