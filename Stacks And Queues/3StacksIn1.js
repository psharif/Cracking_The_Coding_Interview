/// Implement a single stack
/// that keeps track of three separate stacks.
class FixedMultiStack {
  /// Defines the number of Stacks.
  /// the size of those stacks.
  /// the array to keep the values.
  /// and the three sizes for the sizes.
  constructor(stackSize) {
    this.numberOfStacks = 3;
    this.stackCapacity = stackSize;
    this.values = new Array(stackSize * this.numberOfStacks).fill(0);
    this.sizes = [0, 0, 0];
  }

  /// Pushes the value on the right stack.
  push(stackNum, value){
    if(this.isFull(stackNum)){
      console.log("Stack is Full can't perform Push");
      return;
    }
    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = value;
  }

  /// Pops the right element from the right stack and returns it.
  pop(stackNum){
    if(this.isEmpty(stackNum)) {
      console.log("Stack is Empty can't perform Pop");
    }
    const value = this.values[indexOfTop(stackNum)];
    this.values[this.indexOfTop(stackNum)] = 0;
    this.sizes[stackNum]--;
    return value;
  }

  /// Looks at the top of the stack and returns the element.
  peek(stackNum) {
    if(this.isEmpty(stackNum)){
      console.log("Stack is Empty can't perform Peek");
    }
    return this.values[this.indexOfTop(stackNum)];

  }

  /// Returns if the sizes of the stacks are 0.
  isEmpty(stackNum) {
    return this.sizes[stackNum] == 0;
  }

  /// Returns if any of the stacks are full.
  isFull(stackNum) {
    return this.sizes[stackNum] == this.stackCapacity;
  }

  /// Returns the indexOf the top for the specified stack.
  indexOfTop(stackNum) {
    const offset = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }
}


const stack = new FixedMultiStack(4);
console.log(stack);
console.log(stack.isEmpty(0));

stack.push(0, 4);
stack.push(1, 7);
stack.push(2, 2);
stack.push(0, 4);
stack.push(1, 7);
stack.push(2, 2);
stack.push(0, 4);
stack.push(1, 7);
stack.push(2, 2);
stack.push(0, 4);

console.log(stack.indexOfTop(1));

console.log(stack);
