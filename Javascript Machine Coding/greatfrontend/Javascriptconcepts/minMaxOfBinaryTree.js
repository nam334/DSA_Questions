class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMax(root) {
  let queue = [],
    max = 0,
    min = 0,
    curr;

  queue.push(root);
  while (queue.length) {
    curr = queue.shift();
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  if (curr.value > max) max = curr.value;
  if (curr.value < min) min = curr.value;
  return max, min;
}

let root = new Node(2);
root.left = new Node(7);
root.right = new Node(5);
// root.left.right = new Node(6);
// root.left.right.left = new Node(1);
// root.left.right.right = new Node(11);
// root.right.right = new Node(9);
// root.right.right.left = new Node(4);
console.log("Maximum and minimum elements are", findMax(root));
