class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class MaximumDepth {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  maximumDepthRecursive(root) {
    if (!root) return 0;
    let lh = this.maximumDepthRecursive(root.left);
    let rh = this.maximumDepthRecursive(root.right);
    return 1 + Math.max(lh, rh);
  }
}

let tree = new MaximumDepth(1);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.left.right.right = new TreeNode(6);
tree.root.right = new TreeNode(3);

console.log(tree.maximumDepthRecursive(tree.root));
