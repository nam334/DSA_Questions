class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueUsingLinkedList {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  push(el) {
    let newNode = new Node(el);
    if (this.start === null && this.end === null) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.size++;
  }
  pop() {
    if (this.start === null) {
      this.end = null;
      return "Empty queue";
    }
    let temp = this.start;
    this.start = this.start.next;
    if (this.start === null) {
      // If the queue becomes empty
      this.end = null;
    }
    this.size--;
    return temp.data;
  }
}
