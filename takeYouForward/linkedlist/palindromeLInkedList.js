class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(el) {
    let newNode = new Node(el);
    if (this.head === null) this.head = newNode;
    else {
      newNode.next = this.head;
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
  palindrome() {
    let temp = this.head,
      stack = [];
    while (temp !== null) {
      stack.push(temp.data);
      temp = temp.next;
    }
    temp = this.head;
    while (temp !== null) {
      if (stack.pop() !== temp.data) return false;
      temp = temp.next;
    }
    return true;
  }
}

let ll = new SinglyLinkedList();
ll.insertAtHead(1);
ll.insertAtHead(2);
ll.insertAtHead(2);
ll.insertAtHead(1);
// ll.insertAtHead(1);
ll.print();
// console.log("After reversing");
// ll.reverse();
// ll.print();
// console.log("After removing 5th node from end");
// ll.removeNthFromEnd(5);
// ll.removeFromEndOptimised(5);
// ll.print();
console.log(" is list palindrome");
console.log(ll.palindrome());
