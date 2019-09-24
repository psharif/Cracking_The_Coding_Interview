const { LinkedList, Node } = require('./LinkedListES6.js');

class Queue extends LinkedList {
  constructor(){
    super();
  }
  enqueue(node) {
    if(this.head == null) {
      this.head = node;
    }
    else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  dequeue() {
    const node = this.head;
    this.head = this.head.next;
    node.next = null;
    this.size--;
    return node;
  }

  peek() {
    const node = this.head;
    return node;
  }

  size() {
    return this.size();
  }
}

module.exports = { Queue };
/*
const q = new Queue();
q.enqueue(new Node(1));
q.enqueue(new Node(2));
q.enqueue(new Node(3));

q.print(q.getHead());
*/
