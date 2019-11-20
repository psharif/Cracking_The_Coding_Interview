/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.size = k;
  this.elements = 0;
  this.queue = [];
  this.front = 0;
  this.rear = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
    this.rear++;
    this.queue[(this.rear - 1) % this.size] = value;
    if (this.rear > this.size) this.rear = 1;
    this.elements++;
    return true;
  }
  return false;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()) {
    this.front++;
    this.queue[(this.front - 1) % this.size] = null;
    if (this.front > this.size) this.front = 1;
    this.elements--;
    return true;
  }
  return false;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.front] ? this.queue[this.front] : this.queue[0];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.rear - 1] ? this.queue[this.rear - 1] : this.queue[0];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.elements == 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.elements == this.size;
};
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// Nice Solution Was trying to do.

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.que = new Array(k).fill(-1);
  this.front = -1;
  this.rear = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.rear == -1 && this.front == -1) {
    this.rear = 0;
    this.front = 0;
    this.que[0] = value;
    return true;
  } else {
    if ((this.rear + 1) % this.que.length == this.front) return false;
    else {
      this.rear = (this.rear + 1) % this.que.length;
      this.que[this.rear] = value;
      return true;
    }
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.rear == -1 && this.front == -1) {
    return false;
  } else if (this.rear == this.front) {
    this.que[this.front] = -1;
    this.front = -1;
    this.rear = -1;
    return true;
  } else {
    this.que[this.front] = -1;
    this.front = (this.front + 1) % this.que.length;
    return true;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.front != -1) return this.que[this.front];
  return -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.rear != -1) return this.que[this.rear];
  return -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.front == -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.front != -1 && this.front == (this.rear + 1) % this.que.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
