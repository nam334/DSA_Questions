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
  // //add a node
  // addAnElement(elememt) {
  //   let newNode = new Node(elememt);
  //   //insert at head
  //   if (this.head === null) this.head = newNode;
  //   else {
  //     //insert at tail
  //     let current = this.head;
  //     while (current.next !== null) {
  //       current = current.next;
  //     }
  //     current.next = newNode;
  //   }
  //   this.size++;
  // }
  //add a node
  addAnElementAtPosition(k, el) {
    let newNode = new Node(el);
    if (this.head === null) {
      if (k === 1) {
        this.head = newNode;
      } else return null;
    }
    if (k === 1) {
      // newNode.next = this.head;
      this.head = newNode;
    }
    let cnt = 0,
      temp = this.head;
    while (temp !== null) {
      cnt++;
      if (cnt === k - 1) {
        newNode.next = temp.next;
        temp.next = newNode;
      }
      temp = temp.next;
    }
    return this.head;
  }

  addAnElementByValue(el, value) {
    let newNode = new Node(value);
    if (this.head === null) {
      return null;
    }
    if (this.head.data === el) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      if (temp.next.data === el) {
        newNode.next = temp.next;
        temp.next = newNode;
        break;
      }
      temp = temp.next;
    }
    return this.head;
  }

  //deletion

  //delete head (delete from first)
  removeHead() {
    if (this.head === null) return head;

    this.head = this.head.next;
    return this.head;
  }

  //delete from last
  removeTail() {
    if (this.head === null || this.head.next === null) return null;
    let temp = this.head;
    while (temp.next.next !== null) temp = temp.next;
    temp.next = null;
  }
  //delete from position k
  removeFromPosition(k) {
    if (this.head === null) return null;
    //k ==1 (first node)
    if (k === 1) {
      if (this.head === null || this.head.next === null) return null;
      this.head = this.head.next;
      return this.head;
    }
    let cnt = 0,
      prev = null,
      temp = this.head;
    while (temp) {
      cnt++;
      if (cnt === k) {
        prev.next = prev.next.next;
        break;
      }
      prev = temp;
      temp = temp.next;
    }
    console.log("no of elements are", cnt);
    if (k > cnt) return "k does not exist";
  }

  //remove depending on value
  removeDependingOnValue(value) {
    if (this.head === null) return null;
    //k ==1 (first node)
    if (this.head.data === value) {
      this.head = this.head.next;
      return this.head;
    }
    let prev = null,
      temp = this.head;
    while (temp) {
      if (temp.data === value) {
        prev.next = prev.next.next;
        break;
      }
      prev = temp;
      temp = temp.next;
    }
  }
  print() {
    let current = this.head;
    let output = " ";
    while (current) {
      output += current.data + " ";
      current = current.next;
    }
    return output;
  }
}

// const ll = new LinkedList();
// ll.addAnElement(10);
// ll.addAnElement(20);
// ll.addAnElement(30);
// console.log("Original linked list");
// console.log(ll.print());
// console.log("Remove head", ll.removeHead());
// console.log("Removing from tail");
// ll.removeTail();
// ll.removeFromPosition(3);
// ll.removeDependingOnValue(30);
// console.log("After removing element with value 30");
// console.log(ll.print());

const ll = new LinkedList();
ll.addAnElementAtPosition(1, 10);
ll.addAnElementAtPosition(2, 20);
ll.addAnElementAtPosition(3, 30);
console.log("Original linked list");
console.log(ll.print());
// console.log("insert at 2");
// ll.addAnElementAtPosition(1, 50);
// console.log("List after insertion");
// console.log(ll.print());

ll.addAnElementByValue(40, 100);
console.log("List after addition of value");
console.log(ll.print());

// {
//     "head":{
//         "element":10,
//         "next":{
//             "element":20,
//             "next":{
//                 "element":30,
//                 "next" :"null"
//                    }
//               }
//        }
// }
