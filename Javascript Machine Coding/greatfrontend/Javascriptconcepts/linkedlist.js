class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let current = this.head,
      count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("invalid index");
      return;
    } else {
      let newNode = new Node(data);
      if (index === 0) this.insertAtHead(newNode);

      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  //remove

  //remove from top
  removeFromTop() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  //remove last element
  removeLastElement() {
    if (!this.head) return;
    let current = this.head;
    while (current.next.next) current = current.next;
    current.next = null;
  }
  //remove from given index
  //1 3 4 5 6
  //0 1 2 3 4

  removeAt(index) {
    if (index < 0 || index > this.size()) return "invalid index";
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) current.next = current.next.next;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.insertAtHead(10);
linkedList.insertAtHead(20);
linkedList.insertAtHead(30);
linkedList.insertAtEnd(1);
linkedList.print();
// console.log(linkedList.size());
