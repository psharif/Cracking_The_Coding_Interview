const { LinkedList } = require('./LinkedListES6.js');
/// Stable version that uses 4 different nodes to keep track of the lists.
const partition1 = (node, partition) => {
  let beforeStart;
  let beforeEnd;
  let afterStart;
  let afterEnd;

  /// While Linked List has values.
  while(node) {
    /// Keep a value of the next node.
    let next = node.next;
    /// Now set the next pointer of the list to null.
    /// (This will make it so lists only get the value of the current node, not nodes after this one).
    node.next = null;
    /// If the the current node data is less than partition
  	if(node.data < partition){
      /// Either start a new list or add to the before list.
    	if(beforeStart == null){
        beforeStart = node;
        beforeEnd = beforeStart;
      }
    	else {
      	beforeEnd.next = node;
        beforeEnd = beforeEnd.next;
      }
    }
    else {
      /// Either start the After List or add to the after list.
      if(afterStart == null){
      	afterStart = node;
        afterEnd = afterStart;
      }
    	else {
      	afterEnd.next = node;
        afterEnd = afterEnd.next;
      }
    }

    node = next;
  }
  /// Make sure there is values less than the partition
  /// If not return the after list.
  if(beforeStart == null){
  	return afterStart;
  }
  /// If there are values less than the value return the beforeStart.
  beforeEnd.next = afterStart;
  return beforeStart;
}

	/// This is not as stable because it changes the order of the original linked list.
const partition2 = (node, partition) => {

	let head = node;
  let tail = node;

	while(node) {
    let next = node.next;

  	if(node.data < partition) {
    	node.next = head;
      head = node;
    }
  	else {
    	tail.next = node;
      tail = node;
    }

    node = next;
  }

	tail.next = null;

	return head;
}

var linked = new LinkedList();

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


console.log("The partion of the list");
var result = partition2(linked.getHead(), 5);
linked.print(result);
console.log();
