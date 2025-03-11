class StackUsingQueue {
  constructor() {
    this.queue = [];
  }
  push(x) {
    this.queue.push(x);
    let s = this.queue.length;
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  top() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.queue[0];
  }
  printStack() {
    console.log([...this.queue].join(" -> ") + " -> null");
  }
}

const st = new StackUsingQueue();
st.push(10);
st.push(20);
st.push(30);
st.printStack();
console.log("popped element", st.pop());
console.log("top element", st.top());
