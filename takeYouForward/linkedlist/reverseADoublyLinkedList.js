class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(el) {
    let newNode = new Node(el);
    if (this.head === null) this.head = newNode;
    else {
      newNode.prev = null;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return this.head;
  }
  print() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let output = "";
    let temp = this.head;
    while (temp) {
      output += temp.data + " ⇄ ";
      temp = temp.next;
    }
    console.log(output);
  }
  //reversing a list
  reversingAList() {
    let stack = [],
      temp = this.head;

    while (temp) {
      stack.push(temp.data);
      temp = temp.next;
    }

    temp = this.head;
    while (temp) {
      //console.log("stack is", stack.pop(), "temp is at", temp.data);
      temp.data = stack.pop();
      //console.log("after changing", stack.pop(), "temp is at", temp.data);
      temp = temp.next;
    }
  }

  reversingAListOptimised() {
    let pre = this.head;
    let temp = this.head.next;
    while (temp.next) {
      pre.prev = this.head;
      pre.next = temp;
      this.head = temp;
      pre.next = this.head;
      temp = temp.next;
    }
  }
}

let dll = new DoublyLinkedList();
dll.insertAtHead(10);
dll.insertAtHead(20);
dll.insertAtHead(30);
dll.print();
console.log("after reversing the list");
dll.reversingAListOptimised();
dll.print();
