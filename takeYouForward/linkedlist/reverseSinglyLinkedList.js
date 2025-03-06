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

  //reverse using iterative approach
  //   reverse() {
  //     let temp = this.head;
  //     let prev = null;
  //     while (temp !== null) {
  //       console.log("temp is", temp);
  //       let front = temp.next;
  //       temp.next = prev;
  //       prev = temp;
  //       temp = front;
  //     }
  //     this.head = prev;
  //     return this.head;
  //   }

  //   reverseUsingRecursion(head) {
  //     if (head === null || !head.next) return head;
  //     let newNode = this.reverseUsingRecursion(head.next);
  //     let front = head.next;
  //     front.next = head;
  //     head.next = null;
  //     return newNode;
  //   }

  //   reverse() {
  //     this.head = this.reverseUsingRecursion(this.head); // Ensure the new head is assigned
  //   }

  removeNthFromEnd(n) {
    let temp = this.head,
      cnt = 0;
    while (temp) {
      cnt++;
      temp = temp.next;
    }

    let i = cnt - n + 1;

    if (i === 1) {
      let tem = this.head;
      console.log("i is", i, "tem is", tem);
      if (tem === null) return null;
      else if (tem.next === null) return [];
      else {
        this.head = this.head.next;
        return this.head;
      }
    }
    let tem = this.head,
      cn = 0,
      prev = null;
    while (tem !== null) {
      //   console.log("tem is", tem, cn, i);
      cn++;
      if (cn === i) break;
      prev = tem;
      tem = tem.next;
    }
    prev.next = tem.next;
    // tem.next = null;
    return this.head;
  }

  removeFromEndOptimised(n) {
    let fast = this.head;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    let slow = this.head;

    if (fast === null) {
      this.head = this.head.next;
      return this.head;
    }
    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
    return this.head;
  }
  //   remove() {
  //     this.head = this.removeNthFromEnd(this.head, 4);
  //   }
}

let ll = new SinglyLinkedList();
ll.insertAtHead(5);
ll.insertAtHead(4);
ll.insertAtHead(3);
ll.insertAtHead(2);
ll.insertAtHead(1);
ll.print();
// console.log("After reversing");
// ll.reverse();
// ll.print();
console.log("After removing 5th node from end");
// ll.removeNthFromEnd(5);
ll.removeFromEndOptimised(5);
ll.print();
