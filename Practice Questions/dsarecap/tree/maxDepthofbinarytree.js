class Treenode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// class MaximumDepthOfBinaryTree {
//   constructor(value) {
//     this.root = new Treenode(value);
//   }

//   maximumDepthOfBinaryTree(root) {
//     if (!root) return 0;
//     let lh = this.maximumDepthOfBinaryTree(root.left);
//     let rh = this.maximumDepthOfBinaryTree(root.right);
//     return 1 + Math.max(lh, rh);
//   }
// }

// const tree = new MaximumDepthOfBinaryTree(3);
// tree.root.left = new Treenode(9);
// tree.root.right = new Treenode(20);
// tree.root.right.left = new Treenode(15);
// tree.root.right.right = new Treenode(7);

// console.log(tree.maximumDepthOfBinaryTree(tree.root));

class BinaryTree {
  constructor(value) {
    this.root = new Treenode(value);
  }
  sameTree(p, q) {
    if (p === null || q === null) return p === q;
    if (p.data !== q.data) return false;
    return this.sameTree(p.left, q.left) && this.sameTree(p.right, q.right);
  }
}

const tree1 = new BinaryTree(3);
tree1.root.left = new Treenode(9);
tree1.root.right = new Treenode(20);

const tree2 = new BinaryTree(3);
tree2.root.left = new Treenode(59);
tree2.root.right = new Treenode(20);

console.log(tree1.sameTree(tree1.root, tree2.root));
