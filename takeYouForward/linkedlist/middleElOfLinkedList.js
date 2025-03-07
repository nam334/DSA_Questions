class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertElement(el) {
    const newNode = new Node(el);
    if (this.head === null) this.head = newNode;
    else {
      let prev = this.head;
      newNode.next = prev;
      this.head = newNode;
    }
    console.log(newNode);
    return this.head;
  }
  print() {
    let output = "";
    let temp = this.head;
    while (temp !== null) {
      output += temp.data + " ";
      temp = temp.next;
    }
    console.log(output);
  }
  middleElement() {
    let temp = this.head;
    let cnt = 0;
    while (temp) {
      cnt++;
      temp = temp.next;
    }
    let mid = Math.floor(cnt / 2) + 1;

    temp = this.head;
    while (temp) {
      mid--;
      if (mid === 0) break;
      temp = temp.next;
    }
    return temp.data;
  }
  middeElementOptimised() {
    let slow = this.head,
      fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }
}

const ll = new LinkedList();
ll.insertElement(6);
ll.insertElement(5);
ll.insertElement(4);
ll.insertElement(3);
ll.insertElement(2);
ll.insertElement(1);
ll.print();
console.log("middle element is", ll.middeElementOptimised());
