const Stack = require('./stack.js');

class Queue {
  constructor(){
    this.oldStack = new Stack();
    this.newStack = new Stack();
  }
  /// Queue method of Enqueue
  add(el) {
    this.newStack.push(el);
  }
  /// Shift the elements
  shiftElements() {
    /// Move all the elements from new stack
    /// to the new stack. But only if old stack is
    /// empty
    if(this.oldStack.isEmpty()){
      while(!this.newStack.isEmpty()){
       this.oldStack.push(this.newStack.pop());
      }
    }
  }
  /// Queue method of Dequeue
  remove() {
    this.shiftElements();
    return this.oldStack.pop();
  }

  peek() {
    this.shiftElements();
    return this.oldStack.peek();
  }
}

const stack = new Stack();

stack.push(5);
console.log(stack);

const q = new Queue();

q.add(8);
q.add(4);
q.add(7);
q.add(2);
q.add(3);
console.log("Queue after adds");
console.log(q.newStack);
console.log(q.oldStack);
console.log();

const pop1 = q.remove();
console.log("Queue after pop");
console.log(q.newStack);
console.log(q.oldStack);
console.log("The element popped was " + pop1);
console.log();

const pop2 = q.remove();
console.log("Queue after pop");
console.log(q.newStack);
console.log(q.oldStack);
console.log("The element popped was " + pop2);
console.log();

const peek = q.peek();
console.log("Queue after peek");
console.log(q.newStack);
console.log(q.oldStack);
console.log("The element peeked was " + peek);
console.log();
