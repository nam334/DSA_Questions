class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function boundaryTraversal(root) {
  let res = [];
  if (!root) return res;
  if (!isLeaf(root)) res.push(root.value); // Add root only if it's not a leaf

  addLeftBoundary(root, res);
  addLeaf(root, res);
  addRightBoundary(root, res);
  return res;
}

function addLeftBoundary(root, res) {
  let curr = root.left;
  while (curr) {
    if (!isLeaf(curr)) res.push(curr.value);
    if (curr.left) curr = curr.left;
    else curr = curr.right;
  }
}

function addLeaf(root, res) {
  if (!root) return;
  if (isLeaf(root)) {
    res.push(root.value);
    return;
  }
  addLeaf(root.left, res);
  addLeaf(root.right, res);
}

function addRightBoundary(root, res) {
  let curr = root.right,
    res1 = [];
  while (curr) {
    if (!isLeaf(curr)) res1.push(curr.value);
    if (curr.right) curr = curr.right;
    else curr = curr.left;
  }
  res.push(...res1.reverse());
}

function isLeaf(root) {
  if (!root.left && !root.right) return true;
  else return false;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(4);
root.left.left.right.left = new TreeNode(5);
root.left.left.right.right = new TreeNode(6);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.right.left.left = new TreeNode(10);
root.right.right.left.right = new TreeNode(11);

console.log("Boundary Traversal", boundaryTraversal(root));
