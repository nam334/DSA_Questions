class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class VerticalOrderTraversal {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  VerticalOrderTraversal(root) {
    let myMap = new Map(),
      result = [],
      queue = [];
    queue = [[root, 0]];
    while (queue.length) {
      let [node, hd] = queue.shift();
      if (!myMap.has(hd)) myMap.set(hd, [node.data]);
      else myMap.get(hd).push(node.data);
      if (node.left) queue.push([node.left, hd - 1]);
      if (node.right) queue.push([node.right, hd + 1]);
    }
    const keys = Array.from(myMap.keys()).sort((a, b) => a - b);
    for (let key of keys) {
      result.push(myMap.get(key));
    }
    return result;
  }
}

const tree = new VerticalOrderTraversal(3);
tree.root.left = new TreeNode(9);
tree.root.right = new TreeNode(20);
tree.root.right.left = new TreeNode(15);
tree.root.right.right = new TreeNode(7);

console.log(tree.VerticalOrderTraversal(tree.root));
