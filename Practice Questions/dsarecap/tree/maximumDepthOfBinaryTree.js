class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new TreeNode(value);
  }
  levelOrderTraversal() {
    if (!this.root) return 0;
    let queue = [],
      height = 0;
    queue.push(this.root);
    while (queue.length > 0) {
      height++;
      let n = queue.length;

      for (let i = 0; i < n; i++) {
        let val = queue.shift();
        if (val.left) queue.push(val.left);
        if (val.right) queue.push(val.right);
      }
    }
    return height;
  }
}

let tree = new BinaryTree(1);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.left.right.right = new TreeNode(6);
tree.root.right = new TreeNode(3);

console.log(tree.levelOrderTraversal());
