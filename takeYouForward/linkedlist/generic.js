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
}

let dll = new DoublyLinkedList();
dll.insertAtHead(10);
dll.insertAtHead(20);
dll.insertAtHead(30);
dll.print();
