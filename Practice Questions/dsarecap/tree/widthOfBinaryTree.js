class Treenode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Treenode(value);
  }
  widthOfBinaryTree(root) {
    if (!root) return 0;
    let queue = [[root, 0]];
    let maxWidth = 0;
    while (queue.length > 0) {
      let size = queue.length;
      let start = queue[0][1];
      let end = queue[queue.length - 1][1];
      maxWidth = Math.max(maxWidth, end - start + 1);
      for (let i = 0; i < size; i++) {
        const [node, position] = queue.shift();
        if (node.left) queue.push([node.left, 2 * position + 1]);
        if (node.right) queue.push([node.right, 2 * position + 2]);
      }
    }
    return maxWidth;
  }

  identicalHelper(p, q) {
    if (p === null || q === null) return p === q;
    if (p.value !== q.value) return false;
    return (
      this.identicalHelper(p.left, q.left) &&
      this.identicalHelper(p.right, q.right)
    );
  }
  areTreesIdentical(p, q) {
    return this.identicalHelper(p, q);
  }
}

const tree = new BinaryTree(1);
tree.root.left = new Treenode(3);
tree.root.left.left = new Treenode(5);
tree.root.left.right = new Treenode(6);
tree.root.right = new Treenode(2);

console.log(tree.widthOfBinaryTree(tree.root));
