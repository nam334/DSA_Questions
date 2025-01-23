class Queue {
  constructor() {
    this.queue = [];
  }
  //enqueue - add at end
  enqueue(data) {
    this.queue.push(data);
  }

  //dequeue - delete from front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty, cannot perform dequeue operation";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.queue.length; i++) {
      queueString += this.queue[i] + " ";
    }
    console.log("Queue: " + queueString);
  }
}
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.printQueue();

console.log("Dequeue", myQueue.dequeue());
myQueue.printQueue();
console.log("Front element", myQueue.front());
myQueue.printQueue();
