class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootvalue) {
    this.root = new TreeNode(rootvalue);
  }
  //left - root - right
  preorderTraversal(node = this.root, result = []) {
    if (node === null) return;
    result.push(node.data);
    this.preorderTraversal(node.left, result);
    this.preorderTraversal(node.right, result);

    return result;
  }

  //left - right - root
  postorderTraversal(node = this.root, result = []) {
    if (node === null) return;
    this.postorderTraversal(node.left, result);
    this.postorderTraversal(node.right, result);
    result.push(node.data);
    return result;
  }

  //left - root - right
  inorderTraversal(node = this.root, result = []) {
    if (node === null) return;
    this.inorderTraversal(node.left, result);
    result.push(node.data);
    this.inorderTraversal(node.right, result);

    return result;
  }

  levelOrderTraversal() {
    if (!this.root) return;
    let queue = [],
      result = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let val = queue.shift();
      result.push(val.data);
      if (val.left) queue.push(val.left);
      if (val.right) queue.push(val.right);
    }
    return result;
  }

  iterativePreOrder() {
    if (!this.root) return;
    let stack = [],
      res = [];
    stack.push(this.root);
    while (stack.length > 0) {
      let val = stack.pop();
      res.push(val.data);
      if (val.right) stack.push(val.right);
      if (val.left) stack.push(val.left);
    }
    return res;
  }

  iterativeInOrder() {
    let stack = [],
      result = [];
    let node = this.root;
    while (stack.length > 0 || node !== null) {
      if (node !== null) {
        stack.push(node);
        node = node.left;
      } else {
        // if (stack.length === 0) break;
        let val = stack.pop();
        result.push(val.data);
        node = val.right;
      }
    }
    return result;
  }
}

const tree = new BinaryTree(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.left.right.left = new TreeNode(6);
tree.root.left.right.right = new TreeNode(7);

console.log("Preorder traversal", tree.preorderTraversal());
console.log("Postorder traversal", tree.postorderTraversal());
console.log("Inorder traversal", tree.inorderTraversal());
console.log("Level order traversal", tree.levelOrderTraversal());
console.log("Iteartive preorder", tree.iterativePreOrder());
console.log("Iteartive ineorder", tree.iterativeInOrder());
