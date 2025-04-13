class TreeNode {
  constructor(value) {
    this.root = value;
    this.left = null;
    this.right = null;
  }
}

// function maximumDepthOfBinaryTree(root) {
//   if (!root) return null;
//   let queue = [root],
//     count = 0;
//   while (queue.length > 0) {
//     let size = queue.length;
//     for (let i = 0; i < size; i++) {
//       let node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     count++;
//   }
//   return count;
// }

function maximumDepthOfBinaryTreeRecursive(root) {
  if (!root) return 0;
  let left = null,
    right = null;
  if (root.left) left = maximumDepthOfBinaryTreeRecursive(root.left);
  if (root.right) right = maximumDepthOfBinaryTreeRecursive(root.right);
  return 1 + Math.max(left, right);
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(
  "Maximum depth of Binary Tree",
  maximumDepthOfBinaryTreeRecursive(root)
);
