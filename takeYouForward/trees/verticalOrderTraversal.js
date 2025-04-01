class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function verticalOrderTraversal(root) {
  let myMap = new Map();

  if (!root) return [];
  let queue = [[root, 0]];
  while (queue.length > 0) {
    let [node, hd] = queue.shift();
    if (!myMap.has(hd)) myMap.set(hd, [node.value]);
    else myMap.get(hd).push(node.value);
    if (node.left) queue.push([node.left, hd - 1]);
    if (node.right) queue.push([node.right, hd + 1]);
  }
  const keys = Array.from(myMap.keys()).sort((a, b) => a - b);
  const result = [];
  for (let key of keys) result.push(myMap.get(key));
  return result;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("Vertical tree traversal", verticalOrderTraversal(root));
