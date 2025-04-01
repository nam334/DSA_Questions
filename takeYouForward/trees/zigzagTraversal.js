class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function zigzagTraversal(root) {
  if (!root) return [];
  let queue = [root],
    result = [],
    flag = true;
  while (queue.length > 0) {
    let size = queue.length,
      currentLevel = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currentLevel.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (!flag) currentLevel.reverse();
    result.push(...currentLevel);
    flag = !flag;
  }
  return result;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("Zig - zag", zigzagTraversal(root));
