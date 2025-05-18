class Treenode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BoundaryTraversal {
  constructor(value) {
    this.root = new Treenode(value);
  }

  boundaryTraversal(root) {
    let res = [];
    if (!root) return res;
    if (!this.isLeaf(root)) res.push(root.data);
    this.addLeftBoundary(root, res);
    this.addLeaves(root, res);
    this.addRightBoundary(root, res);
    return res;
  }
  addLeftBoundary(root, res) {
    let curr = root.left;
    while (curr) {
      if (!this.isLeaf(curr)) res.push(curr.data);
      if (curr.left) curr = curr.left;
      else curr = curr.right;
    }
  }

  addRightBoundary(root, res) {
    let curr = root.right,
      res1 = [];
    while (curr) {
      if (!this.isLeaf(curr)) res1.push(curr.data);
      if (curr.right) curr = curr.right;
      else curr = curr.left;
    }
    res1 = res1.reverse();
    res.push(...res1);
  }

  addLeaves(root, res) {
    if (this.isLeaf(root)) {
      res.push(root.data);
      return;
    }
    if (root.left) this.addLeaves(root.left, res);
    if (root.right) this.addLeaves(root.right, res);
  }

  isLeaf(root) {
    if (!root.left && !root.right) {
      return true;
    } else return false;
  }
}

let tree = new BoundaryTraversal(1);
tree.root.left = new Treenode(2);
tree.root.left.left = new Treenode(3);
tree.root.left.left.right = new Treenode(4);
tree.root.right = new Treenode(7);
tree.root.right.right = new Treenode(8);
tree.root.right.right.left = new Treenode(9);

console.log(tree.boundaryTraversal(tree.root));
