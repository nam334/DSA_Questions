class StackImp {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
  }
  push(el) {
    if (this.top === this.size - 1) return "Stack overflow";
    this.top = this.top + 1;
    this.stack[this.top] = el;
  }

  pop() {
    if (this.top === -1) return "Stack underflow";
    let el = this.stack.pop();
    this.top--;
    return el;
  }

  peek() {
    return this.stack[this.top];
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  print() {
    if (this.top === -1) return "Stack is empty";
    let output = "";
    for (let i = 0; i < this.stack.length; i++) output += this.stack[i] + " ";
    return output;
  }
}

let st = new StackImp();
st.push(10);
st.push(20);
st.push(30);
console.log(st.print());
console.log("Popping an element", st.pop());
console.log("Top element is", st.peek());
console.log("Size is", st.size());
console.log("Is stack empty", st.isEmpty());
