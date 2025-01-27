// Given the root of a binary tree, return the average value of the nodes on each level in the
//  form of an array. Answers within 10-5 of the actual answer will be accepted.

// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

var averageOfLevels = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const n = queue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(sum / n);
  }
  return result;
};
