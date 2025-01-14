// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways
//  can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    if (n <= dp[i]) dp[i] = Math.min(dp[i], 1 + dp[i - n]);
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
