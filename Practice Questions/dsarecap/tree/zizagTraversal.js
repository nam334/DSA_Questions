class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class ZigZapTraversal {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  zigzapTraversal() {
    let queue = [],
      result = [],
      flag = true;
    queue = [this.root];
    while (queue.length > 0) {
      let ds = [];
      let n = queue.length;
      for (let i = 0; i < n; i++) {
        let node = queue.shift();
        ds.push(node.data);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      if (flag) result.push(ds);
      else result.push(ds.reverse());
      flag = !flag;
    }
    return result;
  }
}

const tree = new ZigZapTraversal(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.right.right = new TreeNode(6);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log(tree.zigzapTraversal());
