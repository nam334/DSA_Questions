//Basic stack implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    //check for empty
    if (this.isEmpty()) {
      return "Stack is Empty, cant perform pop";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty, cant perform peek";
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    for (let i = 0; i < this.stack.length; i++)
      console.log("element at " + i + " is", this.stack[i]);
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.printStack();
console.log("top element is", myStack.peek());
console.log("popped out element", myStack.pop());
console.log("top element is", myStack.peek());
console.log("now stack is");
myStack.printStack();
