// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2

//USING LEVEL ORDER TRAVERSAL (BFS)
// var maxDepth = function (root) {
//   if (root === null) return root;
//   let queue = [],
//     count = 0;
//   queue.push(this.root);
//   while (queue.length) {
//     for (let i = 0; i < queue.length; i++) {
//       let curr = queue.shift();
//       if (curr.left) queue.push(curr.left);
//       if (curr.right) queue.push(curr.right);
//     }
//     count++;
//   }
//   return count;
// };

//USING RECURSION

var maxDepthRec = function (root) {
  if (!root) return 0;
  if (root.left) {
    let d1 = this.maxDepthRec(root.left);
  }
  if (root.right) {
    let d2 = this.maxDepthRec(root.right);
  }

  return maxDepthRec(d1, d2) + 1;
};
