class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class IdenticalTrees {
  constructor(value) {
    this.root = new TreeNode(value);
  }
  identicalHelper(p, q) {
    if (p === null || q === null) return p === q;
    if (p.data !== q.data) return false;
    return (
      this.identicalHelper(p.left, q.left) &&
      this.identicalHelper(p.right, q.right)
    );
  }
  areTreesIdentical(p, q) {
    return this.identicalHelper(p, q);
  }
}
// Create two trees
let tree1 = new IdenticalTrees(1);
tree1.root.left = new TreeNode(2);
tree1.root.right = new TreeNode(3);

let tree2 = new IdenticalTrees(1);
tree2.root.left = new TreeNode(2);
tree2.root.right = new TreeNode(3);

console.log(tree1.areTreesIdentical(tree1.root, tree2.root)); // true
