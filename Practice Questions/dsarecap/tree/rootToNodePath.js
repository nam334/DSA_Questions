class Treenode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class RootToNodePath {
  constructor(value) {
    this.root = new Treenode(value);
  }
  rootNodePath(root, stack, value) {
    if (!root) return false;
    stack.push(root.data);
    if (root.data === value) return true;
    if (
      this.rootNodePath(root.left, stack, value) ||
      this.rootNodePath(root.right, stack, value)
    )
      return true;
    stack.pop();
    return false;
  }

  findPath(root, value) {
    let stack = [];
    this.rootNodePath(root, stack, value);
    return stack;
  }
}

const tree = new RootToNodePath(1);
tree.root.left = new Treenode(2);
tree.root.left.left = new Treenode(4);
tree.root.left.right = new Treenode(5);
tree.root.left.right.left = new Treenode(6);
tree.root.left.right.right = new Treenode(7);
tree.root.right = new Treenode(3);

console.log(tree.findPath(tree.root, 7));
