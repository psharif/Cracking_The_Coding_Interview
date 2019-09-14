const { LinkedList, Node } = require('./LinkedListES6.js');

/// Find if a palindrome by reversing the list.
const isPalindrome1 = (l1) => {
  /// Reverse and clone one of the lists.
	const reverse = reverseList(l1);
	/// Check if they are equal
	return isEqual(l1, reverse);
}

/// Create a reversed copy of the list.
/// You will be given the head of the list.
const reverseList = (node) => {
	let head = null;
	while(node){
    /// Have the first node point to the back node or null.
  	const n = new Node(node.data);
    /// Have the new node point to head (Back of list).
  	n.next = head;
    /// Move head pointer to where the new node.
  	head = n;
    /// Go to the next node.
  	node = node.next;
  }
	return head;
}

/// Checks if two linked lists are equal.
const isEqual = (one, two) => {
  /// While both lists aren't null.
  /// Check if there values match.
	while(one !== null && two !== null) {
  	if(one.data !== two.data)
        return false

    	one = one.next;
    	two = two.next;
  }
	/// Return if they are both at the end of their lists.
	return one == null && two == null;
}

/// Find if a linkedlist is a palindrome using a stack.
const isPalindrome2 = (node) => {
  /// First find the middle of the linked list.
  let fast = node;
  let slow = node;
  const stack = [];
  /// While looking for the middle add elements to the stack.
  while(fast && fast.next) {
    stack.unshift(slow.data);
    slow = slow.next;
  	fast = fast.next.next;
  }
  /// In case the list was uneven move the list forward one.
  if(fast){
  	slow = slow.next;
  }

  /// For the remaining elements check if the stack elements
  /// are equal to the rest of the list.
  while(slow){
  	var el = stack.shift();
    //console.log(el);
    //console.log(slow.data);
    if(slow.data !== el){
      	console.log("Exiting here");
    	return false;
    }
    slow = slow.next;
  }
  /// Return if the stack is empty. If it is return true.
  //console.log(stack);
  return stack.length == 0;
}

/// Recursive way to determine if a linkedList is
/// a palindrome.
const isPalindrome3 = (head) => {
  /// Keep a copy of the head and use it
  /// keep track of a left pointer.
  let left = head;
  /// Pass in the head of a linked list as the right pointer.
  //const result = helper(head);

  const helper = (right) => {
    /// While the right pointer is not null
	  if(right == null)
      return true;

  	/// Recurse till you find the end of the list.
    const result = helper(right.next);

    /// If at any point the recursion returns false.
    /// Keep returning false.
  	if(!result) {
      return false;
    }

    /// After you've reached the end of the list.
    /// You can check the left pointer to the right pointer values.
  	const equal = (left.data == right.data);

    /// Move the left pointer right.
    /// The right pointer will return the previous node once a equal is returned.
  	left = left.next;
    /// Return equal.
    return equal;
  }

  /// Pass in the head of a linked list as the right pointer.
  const result = helper(head);

  /// Return the final value returned by the helper function.
  return result;
}

/// Helper Function to find the length of a linked list.
const findLength = (node) => {
	let size = 0;
	while(node){
 		size++;
    node = node.next;
  }
	return size;
}

///Prints the Linked List
const printList = (node) => {
  let current = node;
  let str = "head";

  while(current) {
      str += "->" + current.data;
      current = current.next;
  }
  console.log(str + "->null");
}

const linked = new LinkedList();
const linked2 = new LinkedList();
const linked3 = new LinkedList();

/// Palindrome
linked.addData(3);
linked.addData(2);
linked.addData(1);
linked.addData(6);
linked.addData(1);
linked.addData(2);
linked.addData(3);

/// Not a palindrome
linked2.addData(3);
linked2.addData(2);
linked2.addData(6);
linked2.addData(1);
linked2.addData(2);
linked2.addData(3);

/// Palindrome
linked3.addData(3);

console.log("Added numbers");
linked.print(linked.getHead());
console.log();

console.log("Checking if the list is a palindrome using palindrome1");
const result1 = isPalindrome1(linked.getHead());
console.log("The list is a palindrome? " + result1);
console.log();

console.log("Checking if the list is a palindrome using palindrome2");
const result2 = isPalindrome2(linked2.getHead());
console.log("The list is a palindrome? " + result2);
console.log();


console.log("Checking if the list is a palindrome using palindrome3");
const result3 = isPalindrome3(linked3.getHead());
console.log("The list is a palindrome? " + result3);
console.log();
