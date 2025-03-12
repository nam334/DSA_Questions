class Stack {
  constructor() {
    this.st = [];
    this.minSt = [];
    this.min = Infinity;
  }
  push(el) {
    this.st.push(el);
    this.min = Math.min(this.min, el);
    this.minSt.push(this.min);
  }
  pop() {
    if (this.st.length === 0) return "Stack is empty, nothing to pop";
    this.minSt.pop();
    return this.st.pop();
  }
  peek() {
    if (this.st.length === 0) return "Stack is empty";
    return this.st[this.st.length - 1];
  }
  calcMin() {
    return this.minSt.pop();
  }
  print() {
    let output = "";
    if (this.top === -1) return "Stack is empty";
    for (let i = 0; i < this.st.length; i++) output += this.st[i] + "-";
    return output;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(3);
console.log("Stack is", stack.print());
console.log("Minimum el is", stack.calcMin());
console.log("Popped element is", stack.pop());
// console.log("Top element is", stack.peek());
console.log("Minimum el is", stack.calcMin());
