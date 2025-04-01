class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function topViewOfBinaryTree(root) {
  if (!root) return [];
  let myMap = new Map(),
    queue = [[root, 0]];
  while (queue.length > 0) {
    const [node, hd] = queue.shift();
    if (!myMap.has(hd)) myMap.set(hd, node.value);
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

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

console.log("Top view is", topViewOfBinaryTree(root));
