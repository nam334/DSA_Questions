class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class DiameterOfBinaryTree {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  diameterOfBinaryTree(root, maxi) {
    if (root === null) return 0;
    let lh = this.diameterOfBinaryTree(root.left, maxi);
    let rh = this.diameterOfBinaryTree(root.right, maxi);
    maxi = Math.max(maxi, lh + rh);
    return 1 + Math.max(lh, rh);
  }
  diameterOfBT(root) {
    let maxi = 0;
    return this.diameterOfBinaryTree(root, maxi);
  }
}

let tree = new DiameterOfBinaryTree(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log(tree.diameterOfBT(tree.root));
