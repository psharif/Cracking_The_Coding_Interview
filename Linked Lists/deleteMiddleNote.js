const { LinkedList } = require("./LinkedListES6.js");
const kthFromLast = require("./kthFromLast.js");

const deleteMiddleNode = node => {
  /// Make sure it's not one of the last nodes.
  if (node == null || node.next == null) {
    return false;
  }
  /// Set the next node to the values for the middle node.
  let next = node.next;
  /// Set the next data to the middle node data.
  node.data = next.data;
  /// Set the next pointer to the middle node pointer.
  node.next = next.next;
  return true;
};

const linked = new LinkedList();

linked.addData(3);
linked.addData(2);
linked.addData(1);
linked.addData(2);
linked.addData(4);
linked.addData(6);
linked.addData(4);
linked.addData(5);
linked.addData(2);

console.log("Added numbers");
linked.print(linked.getHead());
console.log();

console.log("Deleted Middle Node");
const middle = kthFromLast(linked.getHead(), 4);
console.log(middle);
console.log(deleteMiddleNode(middle));
linked.print(linked.getHead());
console.log();
