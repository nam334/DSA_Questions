// [1,2,3,4,5,6]
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

  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp);
      temp = temp.next;
    }
  }

  middleElement() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  //   reverseList() {
  //     let temp = this.head;
  //     let val = null;
  //     while (temp.next) {
  //       temp = temp.next;
  //     }
  //     console.log("temp", temp);
  //     val = this.head;
  //     temp.next = this.head;
  //     val.next = this.head.next;
  //   }
}

const linkedItem = new LinkedList();
linkedItem.insertAtHead(10);
linkedItem.insertAtHead(20);
linkedItem.insertAtHead(30);
linkedItem.insertAtHead(40);
linkedItem.insertAtHead(50);
linkedItem.insertAtHead(60);
console.log("linked list is");
linkedItem.print();
// console.log("Middle element is", linkedItem.middleElement());
// console.log("after reverse");
// linkedItem.reverseList();
// linkedItem.print();
