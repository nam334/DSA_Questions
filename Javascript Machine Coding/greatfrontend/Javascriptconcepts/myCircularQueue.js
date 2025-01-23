var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.Enqueue = function (data) {
  if (this.size === this.queue.length) return "Queue is full";
  this.queue.push(data);
  return true;
};

MyCircularQueue.prototype.Dequeue = function () {
  if (this.queue.length === 0) return -1;
  this.queue.shift();
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.IsEmpty = function () {
  return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

var obj = new MyCircularQueue(3);
obj.Enqueue(10);
obj.Enqueue(20);
obj.Enqueue(30);
console.log(obj.Enqueue(40));
obj.Dequeue();
obj.Enqueue(40);
console.log("Front is", obj.Front(), "Rear is", obj.Rear());
