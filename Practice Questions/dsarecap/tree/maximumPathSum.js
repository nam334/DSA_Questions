class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class MaximumPathSum {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  maximumPathSum(root, maxi) {
    if (root === null) return 0;
    let lh = this.maximumPathSum(root.left, maxi);
    let rh = this.maximumPathSum(root.right, maxi);
    maxi.val = Math.max(maxi.val, lh + rh + root.data);
    return root.data + Math.max(lh, rh);
  }
  maxiPathSum(root) {
    let maxi = { val: Number.NEGATIVE_INFINITY };
    this.maximumPathSum(root, maxi);
    return maxi.val;
  }
}

let tree = new MaximumPathSum(-10);
tree.root.left = new TreeNode(9);
tree.root.right = new TreeNode(20);
tree.root.right.left = new TreeNode(15);
tree.root.right.right = new TreeNode(7);

console.log(tree.maxiPathSum(tree.root));
