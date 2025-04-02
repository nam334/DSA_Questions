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

function isSymmetric(root) {
  return root === null || isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(left, right) {
  if (left === null || right === null) return left === right;
  if (left.value !== right.value) return false;
  return (
    isSymmetricHelper(left.left, right.right) &&
    isSymmetricHelper(left.right, right.left)
  );
}

function printPath(root, val) {
  let arr = [];
  printRootToNode(root, arr, val);
  return arr;
}

function printRootToNode(root, arr, val) {
  if (!root) return false;
  arr.push(root.value);
  if (root.value === val) return true;

  if (
    printRootToNode(root.left, arr, val) ||
    printRootToNode(root.right, arr, val)
  )
    return true;

  arr.pop();
  return false;
}

function lca(root, l, r) {
  return leastCommonAncestor(root, l, r);
}

function leastCommonAncestor(root, p, q) {
  if (root === null || root.value === p || root.value === q) return root;
  let left = leastCommonAncestor(root.left, p, q);
  let right = leastCommonAncestor(root.right, p, q);
  if (left === null) return right;
  else if (right === null) return left;
  else return root.value;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.left.left = new TreeNode(8);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(6);
root.right.right.right = new TreeNode(7);

// console.log("Bottom view of binary tree", bottomViewOfBinaryTree(root));
// console.log("Right side view", RightSideView(root));
// console.log("Left side view", LeftSideView(root));
// console.log("Check Symmetric", isSymmetric(root));
// console.log("Print path from root to node", printPath(root, 7));
console.log("LCA is", lca(root, 7, 8));
