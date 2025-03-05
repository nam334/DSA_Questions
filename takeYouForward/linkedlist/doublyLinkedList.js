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
    this.size = 0;
  }

  //deletion implementation

  //delete head node
  deleteHeadNode() {
    //1. if head is null or there is only one element in linked list
    if (this.head === null || this.head.next === null) {
      this.head = null;
      return null;
    }
    let pre = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    pre.next = null;

    return this.head;
  }

  //delete tail node
  deleteTailNode() {
    //1. if head is null or there is only one element in linked list
    if (this.head === null) return null;

    if (this.head.next === null) {
      this.head = null;
      return null;
    }

    let temp = this.head,
      pre = null;
    while (temp.next) {
      temp = temp.next;
    }
    pre = temp.prev;
    temp.prev = null;
    pre.next = null;
    return this.head;
  }

  //delete from kth position
  deleteFromAnyPosition(k) {
    //1. if head is null or there is only one element in linked list
    if (this.head === null) return null;
    if (k < 1) return "Invalid position"; // Invalid k
    if (this.head.next === null) {
      this.head = null;
      return null;
    }
    //First make temp stand at the kth position
    let temp = this.head,
      cnt = 0;
    while (temp) {
      cnt++;
      if (cnt === k) break;
      temp = temp.next;
    }
    let pre = temp.prev;
    let back = temp.next;
    // If k is greater than the length of the list
    if (!temp) return "Position out of bounds";

    if (pre === null && back === null) return null;
    else if (pre === null) return this.deleteHeadNode();
    else if (back === null) return this.deleteTailNode();
    else {
      pre.next = back;
      back.prev = pre;
    }
    temp.next = null;
    temp.prev = null;

    return this.head;
  }

  //deleteByAnyValue

  deleteByAnyValue(value) {
    if (this.head === null) return null;
    if (this.head.data === value) {
      return this.deleteHeadNode();
    } else {
      let temp = this.head;
      while (temp.data !== value) {
        temp = temp.next;
      }
      if (!temp) return "Invalid value";
      let pre = temp.prev;
      let back = temp.next;
      //if temp is last node
      if (back === null) {
        pre.next = null;
        temp.prev = null;
        return;
      }
      //if the node is middle node
      pre.next = back;
      back.prev = pre;

      temp.next = null;
      temp.prev = null;

      // If all nodes are deleted, reset head & tail
      if (!this.head.next) {
        this.head = null;
      }

      return this.head;
    }
  }

  //insert implementation

  //insert before head node
  insertBeforeHead(el) {
    if (this.head === null) return this.insertAtBeginning(el);
    let newNode = new Node(el);
    newNode.prev = null;
    newNode.next = this.head;

    this.head.prev = newNode;

    this.head = newNode;
    return this.head;
  }

  //insert before tail node
  insertBeforeTailNode(el) {
    if (this.head === null) return this.insertAtBeginning(el);
    if (this.head.next === null) return this.insertBeforeHead(el);
    let newNode = new Node(el);
    let temp = this.head,
      pre = null;
    while (temp.next) {
      temp = temp.next;
    }
    pre = temp.prev;
    newNode.next = temp;
    newNode.prev = pre;

    pre.next = newNode;
    temp.prev = newNode;
    return this.head;
  }

  //insert before kth position
  insertBeforeKthPosition(k, value) {
    if (k === 1) return this.insertBeforeHead(value);
    let temp = this.head,
      cnt = 0,
      pre = null;
    while (temp) {
      cnt++;

      if (cnt === k) break;
      temp = temp.next;
    }
    if (cnt < k) return "k is greater than size of linked list";
    pre = temp.prev;
    let newNode = new Node(value);
    newNode.next = temp;
    newNode.prev = pre;

    pre.next = newNode;
    temp.prev = newNode;

    return this.head;
  }

  //insert before value
  insertBeforeValue(value, el) {
    if (this.head.data === value) return this.insertBeforeHead(el);
    let temp = this.head,
      pre = null;
    while (temp.data !== value) {
      temp = temp.next;
    }

    pre = temp.prev;
    let newNode = new Node(el);
    newNode.next = temp;
    newNode.prev = pre;

    pre.next = newNode;
    temp.prev = newNode;

    return this.head;
  }

  //insert at beginning
  insertAtBeginning(el) {
    let newNode = new Node(el);
    if (this.head === null) this.head = newNode;
    return newNode;
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
console.log("insert at beginning");
dll.insertAtBeginning(10);
dll.print();
console.log("insert before head");
dll.insertBeforeHead(20);
dll.print();
console.log("insert before tail");
dll.insertBeforeTailNode(30);
dll.print();
console.log("insertBeforeKthPosition");
dll.insertBeforeKthPosition(3, 100);
dll.print();
console.log("insertBeforeValue");
dll.insertBeforeValue(20, 390);
dll.print();
console.log("delete head node");
dll.deleteHeadNode();
dll.print();
console.log("delete tail node");
dll.deleteTailNode();
dll.print();
console.log("delete by value");
dll.deleteByAnyValue(30);
dll.deleteByAnyValue(100);
dll.deleteByAnyValue(20);
dll.print();
