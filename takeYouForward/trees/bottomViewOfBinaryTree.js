class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function bottomViewOfBinaryTree(root) {
  if (!root) return [];
  let myMap = new Map();
  let queue = [[root, 0]];
  while (queue.length > 0) {
    const [node, hd] = queue.shift();
    if (myMap.has(hd)) myMap.set(hd, node.value);
    else myMap.set(hd, node.value);
    if (node.left) queue.push([node.left, hd - 1]);
    if (node.right) queue.push([node.right, hd + 1]);
  }
  const keys = Array.from(myMap.keys()).sort((a, b) => a - b);
  const result = [];
  for (let key of keys) {
    result.push(myMap.get(key));
  }
  return result;
}
function RightSideView(root) {
  let ds = [];
  rightView(root, 0, ds);
  return ds;
}

function LeftSideView(root) {
  let ds = [];
  leftView(root, 0, ds);
  return ds;
}
function rightView(node, level, ds) {
  if (node === null) return;
  if (level === ds.length) ds.push(node.value);
  rightView(node.right, level + 1, ds);
  rightView(node.left, level + 1, ds);
}

function leftView(node, level, ds) {
  if (node === null) return;
  if (level === ds.length) ds.push(node.value);
  leftView(node.left, level + 1, ds);
  leftView(node.right, level + 1, ds);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

root.right.right = new TreeNode(7);

console.log("Bottom view of binary tree", bottomViewOfBinaryTree(root));
console.log("Right side view", RightSideView(root));
console.log("Left side view", LeftSideView(root));
