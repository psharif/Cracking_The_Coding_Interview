const { LinkedList } = require('./LinkedListES6.js');
const kthFromLast = require('./kthFromLast.js');

/// Returns the node at the start
/// of the loop.
const startOfLoop = head => {
  let fast = head;
  let slow = head;

  /// Make sure your list has a loop
  /// If it does break at the collision point.
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast){ // Collision point
      break;
    }
  }
  /// If you are the end of the list.
  /// Return nothing.
  if(fast == null || fast.next == null){
    return null;
  }

  /// Otherwise start one of the pointers
  /// At the beginning of the list.
  slow = head;
  /// Find where the meet that should be the
  /// beginning of the loop.
  while(slow !== fast){
    slow = slow.next;
    fast = fast.next;
  }
  /// Return the start of the loop node.
  return fast;
}

const linked = new LinkedList();

linked.addData(3);
linked.addData(2);
linked.addData(1);
linked.addData(6);
linked.addData(1);
linked.addData(2);
linked.addData(3);

console.log("Added numbers to list.");
linked.print(linked.getHead());
console.log();

const endNode = kthFromLast(linked.getHead(), 1);
console.log("End node of second list " + endNode.data);
console.log();

const midNode = kthFromLast(linked.getHead(), 5);
console.log("The start of the loop node of the list is " + midNode.data);
console.log();

endNode.setNext(midNode);

const start = startOfLoop(linked.getHead());
console.log("The start of the loop node is " + start.data);
console.log();
