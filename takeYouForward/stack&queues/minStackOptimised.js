class Stack {
  constructor() {
    this.st = [];
    this.minSt = [];
    this.min = Infinity;
  }
  push(el) {
    if (this.isEmpty()) {
      this.st.push(el);
      this.min = el;
    } else {
      if (el > this.min) this.st.push(el);
      else {
        this.st.push(2 * el - this.min);
        this.min = el;
      }
    }
  }
  pop() {
    if (this.isEmpty()) return "Stack is empty, nothing to pop";
    let val = this.st[this.st.length - 1];
    if (val < this.min) {
      let prevmin = this.min;
      this.min = 2 * this.min - this.st[this.st.length - 1];
      this.st.pop();
      return prevmin;
    } else return this.st.pop();
  }
  isEmpty() {
    return this.st.length === 0;
  }
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    let x = this.st[this.st.length - 1];
    if (this.min < x) return x;
    return this.min;
  }

  print() {
    let output = "";
    if (this.top === -1) return "Stack is empty";
    for (let i = 0; i < this.st.length; i++) output += this.st[i] + "-";
    return output;
  }
}

const stack = new Stack();
stack.push(12);
stack.push(15);
stack.push(10);
console.log("Stack is", stack.print());
console.log("Minimum el is", stack.min);
console.log("Popped element is", stack.pop());
// console.log("Top element is", stack.peek());
console.log("Minimum el is", stack.min);
console.log("Top el is", stack.peek());
stack.push(10);
console.log("Top el is", stack.peek());
