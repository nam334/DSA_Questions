class Treenode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class RightLeftView {
  constructor(value) {
    this.root = new Treenode(value);
  }

  rlView(root, level, ds) {
    if (!root) return;
    if (level === ds.length) ds.push(root.data);
    if (root.right) this.rlView(root.right, level + 1, ds);
    if (root.left) this.rlView(root.left, level + 1, ds);
  }

  rightLeftViewOfBinaryTree(root) {
    let level = 0,
      ds = [];
    this.rlView(root, level, ds);
    return ds;
  }

  leftView(root, ds, level) {
    if (!root) return;
    if (level === ds.length) ds.push(root.data);
    if (root.left) this.leftView(root.left, ds, level + 1);
    if (root.right) this.leftView(root.right, ds, level + 1);
  }
  leftSideView(root) {
    let ds = [],
      level = 0;
    this.leftView(root, ds, level);
    return ds;
  }

  isSymmetricHelper(left, right) {
    if (left === null || right === null) return left === right;
    if (left.value !== right.value) return false;
    return (
      this.isSymmetricHelper(left.left, right.right) &&
      this.isSymmetricHelper(left.right, right.left)
    );
  }
  isSymmetric(root) {
    return this.isSymmetricHelper(root.left, root.right);
  }
}

const tree = new RightLeftView(1);
tree.root.left = new Treenode(2);
tree.root.left.left = new Treenode(4);
tree.root.left.right = new Treenode(5);
tree.root.right = new Treenode(3);
tree.root.right.right = new Treenode(7);

console.log(tree.leftSideView(tree.root));
