class Treenode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class LeastCommonAncestor {
  constructor(value) {
    this.root = new Treenode(value);
  }
  findLCA(root, p, q) {
    if (root === null || p === root || q === root) {
      return root;
    }
    let left = this.findLCA(root.left, p, q);
    let right = this.findLCA(root.right, p, q);
    if (left === null) return right;
    else if (right === null) return left;
    else return root;
  }
}

const tree = new LeastCommonAncestor(1);
tree.root.left = new Treenode(2);
tree.root.left.left = new Treenode(4);
tree.root.left.right = new Treenode(5);
tree.root.left.right.left = new Treenode(6);
tree.root.left.right.right = new Treenode(7);
tree.root.right = new Treenode(3);
tree.root.right.left = new Treenode(8);
tree.root.right.right = new Treenode(9);

const node4 = tree.root.left.left; // Node with value 4
const node7 = tree.root.left.right.right; // Node with value 7

const lca = tree.findLCA(tree.root, node4, node7);
console.log(lca.data); // ✅ Should print 2, which is LCA of 4 and 7
