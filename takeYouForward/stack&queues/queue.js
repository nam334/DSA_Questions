class QueueImp {
  constructor(size) {
    this.arr = new Array(size);
    this.start = -1;
    this.end = -1;
    this.currsize = 0;
  }
  enQueue(el) {
    if (this.currsize === size) return "Queue is full";
    if (this.currsize === 0) {
      this.start = 0;
      this.end = 0;
    } else {
      this.end = (this.end + 1) % this.size;
      arr[this.end] = el;
      this.currsize++;
    }
  }
  deQueue() {
    if (this.currsize === 0) return "Queue is empty. nothing to delete";
    let el = this.arr[this.start];
    if (this.currsize === 1) {
      this.start = -1;
      this.end = -1;
    } else {
      this.start = (this.start + 1) % size;
    }
    this.currsize = this.currsize - 1;
    return el;
  }
  peek() {
    if (this.currsize === 0) return "Queue is empty.";
    else return this.arr[this.start];
  }
}
