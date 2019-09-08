const { LinkedList } = require('./LinkedListES6.js');

const kthFromLast1 = (node, k) => {
  let result;
  /// This is the helper function to do the recursion
  function helper(node, k){
  /// If head equals null (reached end of list) return 0
  	if(node == null){
    	return 0;
    }
  	/// Create an index that increases as the recursive call stack is called.
  	/// Meaning it increases as it comes back from the end.
  	let index = helper(node.next, k) + 1;
  	/// If the index equals k
  	if(index == k){
      	/// set the return result to the kthfromend element
      	result = node;
    }
  	/// Returns the index value.
  	return index;
  }

  helper(node, k);
  return result;
}

const kthFromLast2 = (node, k) => {
  /// Assign two head pointers.
	var p1 = node;
	var p2 = node;
	/// Move one of the pointers k distance.
	for(var i = 0; i < k; i++){
    	if(p1 == null){ return null;}
  	p1 = p1.next;
  }
	/// Move each pointer till the head pointer
	/// has reached the end.
	while(p1){
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}

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

console.log("The 4th from Last Element is");
//const middle = linked.kthFromLast1(linked.getHead(), 4);
const middle = kthFromLast1(linked.getHead(), 4);
console.log(middle);
console.log();

module.exports = kthFromLast1;
