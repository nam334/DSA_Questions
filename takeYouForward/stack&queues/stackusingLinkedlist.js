class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackUsingLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  push(el) {
    const newNode = new Node(el);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) return "Nothing to pop, empty stack";
    const temp = this.top;
    this.top = this.top.next;
    this.size--;
    delete temp.data;
  }

  peek() {
    if (this.isEmpty()) return "Nothing to pop, empty stack";
    else return this.top.data;
  }
}
