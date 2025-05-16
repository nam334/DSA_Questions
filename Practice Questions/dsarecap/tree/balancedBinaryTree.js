class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BalancedBinaryTree {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  balancedBT(root) {
    if (root === null) return 0;
    let lh = this.balancedBT(root.left);
    let rh = this.balancedBT(root.right);
    if (lh === -1 || rh === -1) return -1;
    if (Math.abs(lh - rh) > 1) return -1;
    return 1 + Math.max(lh, rh);
  }
}

let tree = new BalancedBinaryTree(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.left.right.right = new TreeNode(6);

console.log(tree.balancedBT(tree.root) !== -1);
