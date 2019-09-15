/// Implement a stack that returns the minimum
/// in O(1) constant time.
class MinStack {
  /// We will use two stacks one with minimums
  /// One regular.
  constructor(){
    this.stack = [];
    this.minStack = [];
  }
  /// Push every number on the regular stack.
  /// If the current num being added is less than or equal
  /// to the current min push it on min stack.
  push(num) {
    this.stack.push(num);
    const minTop = this.minStack[this.minStack.length - 1];
    if(this.minStack.length == 0 || num <= minTop){
      this.minStack.push(num);
    }
  }

  /// Pop the number on the regular stack.
  /// If the regular stack min number is the same
  /// as the minimum top number pop it.
  pop() {
    const stackTop = this.stack.pop();
    const minTop = this.minStack[this.minStack.length - 1];
    if(stackTop === minTop){
      this.minStack.pop();
    }
    return stackTop;
  }
  /// Return the regular stack top value.
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /// Return the minimum top value.
  min() {
    const minTop = this.minStack[this.minStack.length - 1];
    return minTop;
  }
}

const stack = new minStack();
stack.push(6)
stack.push(5)
stack.push(3)

let min = stack.min();
console.log("The min is " + min);

stack.push(8)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(1);

console.log(stack);

min = stack.min();
console.log("The min is " + min);
