const { LinkedList, Node } = require('./LinkedListES6.js');
const kthFromLast = require('./kthFromLast.js');
/// Finds the intersection node of two linkedLists.
const findIntersection = (l1, l2) => {
	/// Keep a variable with l1
  let head1 = l1;
	/// Keep a variable with l2
	let head2 = l2;
	/// Keep a count of number of times reached end
	let reachedEnd = 0;
  /// Keep going through the list unless two nodes are the same
	/// Or if you've traversed the list twice
	while(l1 !== l2 && reachedEnd < 2) {
    if(l1.next == null) {
      l1 = head2;
    	reachedEnd++;
    }
    else if(l2.next == null){
    	l2 = head1;
    }

  	l1 = l1.next;
    l2 = l2.next;
  }
	/// If you haven't reached the end twice return the intersecting node.
	if(reachedEnd < 2) {
    //console.log(l1.data);
    return l1.data;
  }

	return false;
}


const linked = new LinkedList();
const linked2 = new LinkedList();

linked.addData(3);
linked.addData(2);
linked.addData(1);
linked.addData(6);
linked.addData(1);
linked.addData(2);
linked.addData(3);

linked2.addData(8);
linked2.addData(7);

console.log("Added numbers to first list.");
linked.print(linked.getHead());
console.log();

console.log("Added numbers to second list.");
linked.print(linked2.getHead());
console.log();

const midNode = kthFromLast(linked.getHead(), 4);
console.log("Middle node of first list " + midNode.data);
console.log();

const endNode = kthFromLast(linked2.getHead(), 1);
console.log("End node of second list " + endNode.data);
console.log();

/// Creates two Linked Lists with an intersection
endNode.setNext(midNode);
console.log("Linked List 2 with intersection");
linked2.print(linked2.getHead());
console.log();

const result = findIntersection(linked.getHead(), linked2.getHead());
console.log("The intersecting node is " + result);
console.log();
