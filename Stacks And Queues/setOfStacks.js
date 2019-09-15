/// Used This reference for implementation.
/// Link: https://itnext.io/how-to-implement-a-set-of-stacks-in-javascript-6fcfd19adda
class SetOfStacks {
  constructor(max) {
    this.maxSizeOfStack = max;
    this.sOfS = [[]];
  }

  push(value) {
    const lastStack = this.sOfS[this.sOfS.length - 1];
    /// If the last Stack is full add a new one.
    if(lastStack.length == this.maxSizeOfStack) {
      this.sOfS.push([]);
    }
    /// Get the last stack in the Stack of Stacks.
    this.sOfS[this.sOfS.length - 1].push(value);
  }

  pop() {
    const lastStack = this.sOfS[this.sOfS.length - 1];
    /// Pop from the last Stack.
    const result = lastStack.pop();

    /// If the lastStack length is 0 and not the first stack.
    /// Pop that stack of the Stack of Stacks.
    if(this.sOfS.length > 1 && lastStack.length == 0) {
      this.sOfS.pop();
    }
    console.log(this.sOfS);
    return result;
  }

  peek() {
      const lastStack = this.sOfS[this.sOfS.length - 1];
      return lastStack[lastStack.length - 1];
  }

  popAt(stackNum) {
    /// Error Handling in case incorrect input.
    if (stackNum < 1 || stackNum > this.sOfS.length) {
      throw new Error ('Whoa, that number is either too small or too large for our stack.')
    }

    /// Pop the value at the stackNumber requested.
    let currentStack = this.sOfS[stackNum - 1];
    const currentValue = currentStack.pop();
    /// Create a next stack that will be used for shifting.
    let nextStack = [];
    /// Shift the elements in set of stacks so that
    /// there aren't any gaps an all elements are moved
    for(let i = stackNum; i < this.sOfS.length; i++) {
      /// Get the next stack
      nextStack = this.sOfS[stackNum];
      /// push the value from the next stack onto the current stack.
      currentStack.push(nextStack.shift());
      /// Now there will be a new gap so replace the
      /// current stack with the next one.
      currentStack = nextStack;
    }
    return currentValue;
  }
}

// initialize new StackSet object
let myStack = new SetOfStacks(3);
// to test if it works
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);
console.log(myStack.sOfS); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(myStack.pop()); // 6
console.log(myStack.sOfS); // [ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(myStack.popAt(1)); // 3
console.log(myStack.sOfS); // [ [ 1, 2, 4 ], [ 5 ] ]
