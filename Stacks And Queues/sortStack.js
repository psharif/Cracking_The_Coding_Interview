const Stack = require('./stack.js');

const  sortStack = stack => {
  sorted = new Stack();
  /// While the regular stack has elements.
  /// pop that element find the right place to put it
  /// in sorted stack.
  /// pop sorted elements that are greater than the current
  /// value and put them back in the regular stack.
  /// push the value into the sorted stack.
  while(!stack.isEmpty()) {
    let val = stack.pop();
    while(!sorted.isEmpty() && val < sorted.peek()) {
      stack.push(sorted.pop());
    }
    sorted.push(val);
  }

  /// Push the sorted stack back to the regular stack.
  while(!sorted.isEmpty()){
    stack.push(sorted.pop());
  }

  return stack;
}

const stack = new Stack();
stack.push(4);
stack.push(8);
stack.push(2);
stack.push(9);
stack.push(1);
stack.push(3);

console.log(stack);

console.log(sortStack(stack))
