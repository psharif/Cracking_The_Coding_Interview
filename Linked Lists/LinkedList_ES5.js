function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
  this.size = 0;
}

LinkedList.prototype.addData = function(data){
  /// Create a new node with your data
  /// And next pointer pointing to null
  var newNode = new Node(data);

  /// If head is pointing to null.
  /// Make the head point to the new node.
  if(!this.head) {
    this.head = newNode;
  }
  else {
    /// Create a variable to point to head.
    var current = this.head;

      /// Find the last node in the list. It will point to null.
      while(current.next) {
          current = current.next;
      }
      /// Set the last node to now point to the new Node.
      current.next = newNode
  }

  this.size++;
}

LinkedList.prototype.removeData = function(data) {
  /// If head is pointing to null.
  /// Make the head point to the new node.
  if(!this.head) {
    return;
  }
  else {
    /// Create a variable to point to head.
    var current = this.head;
    var prev = this.head

    /// Find the last node in the list. It will point to null.
    while(current) {
      if(current.data == data){
          break;
      }
      prev = current;
      current = current.next;
    }
    /// Set the last node to now point to the new Node.
    prev.next = current.next;
  }

  this.size--;
}

LinkedList.prototype.insertAt = function(index, data){
  /// Check if the index is less than
  /// 0 or greater than size of linked list.
  if(index < 0 || index > this.size){
      console.log("index out of range");
      return;
  }

  var newNode = new Node(data);
  /// if the index is 0 set the new node to the front node, then point head to it.
  if(index == 0){
    newNode.next = this.head;
    this.head = newNode;
  }
  else{
    /// Otherwise look for the current node with that index.
    /// Keep a current an previous pointer.
    var cur = this.head;
    var prev = this.head;
    var iter = 0;
    /// Loop to the index desired
    while(iter < index){
        iter++;
        prev = cur;
        cur = cur.next;
    }
    /// Set the new node to the current node at the position.
    /// set the previous node to the new node.
    newNode.next = cur;
    prev.next = newNode;
  }

  this.size++;
}

LinkedList.prototype.removeAt = function(index){
  /// Check if the index is less than
  /// 0 or greater than size of linked list.
  if(index < 0 || index > this.size){
    console.log("Index out of range");
    return;
  }

  /// if the index is 0 then point head to the second node (head.next).
  if(index == 0){
    this.head = this.head.next;
  }
  else {
    /// Otherwise look for the current node with that index.
    /// Keep a current an previous pointer.
    var cur = this.head;
    var prev = this.head;
    var iter = 0;
    /// Loop to the index desired
    while(iter < index){
        iter++;
        prev = cur;
        cur = cur.next;
    }
    /// set the previous node to current.next.
    prev.next = cur.next;
  }

  this.size--;
}

LinkedList.prototype.print = function(head){
  var current = head;
  var str = "head";

  while(current) {
      str += "->" + current.data;
      current = current.next;
  }

  console.log(str + "->null");
}


LinkedList.prototype.getHead = function(){
	return this.head;
}

LinkedList.prototype.size = function(){
  return this.size;
}

LinkedList.prototype.isEmpty = function(){
return this.size == 0;
}


/// These are the methods for the code problems ////

LinkedList.prototype.removeDuplicates1 = function(){
  /// Create a hash set
  var set = {};

  var current = this.head;
  var prev = this.head;

  while(current){
    ///If the set has one of the numbers.
    /// Set the previous pointer to the node after current.
    if(set[current.data]){
    	prev.next = current.next;
      	this.size--;
    }
    else {
      /// If the data is not in set. Set it to 1.
      /// set previous to current.
      set[current.data] = 1;
      prev = current;
    }

	  	current = current.next;
  }
}

LinkedList.prototype.removeDuplicates2 = function(){
  /// Check each element in the list.
  var candidate = this.head;

  while(candidate) {
    /// Have another pointer that will check every other element
    var runner = candidate;
  	/// Check we can check every next element that aren't null
  	while(runner.next) {
    	if(candidate.data == runner.next.data){
        /// If we find one that is a duplicate move the runner to the next element.
      	runner.next = runner.next.next;
      }
      else{
      	runner = runner.next;
      }
    }
    candidate = candidate.next;
  }
}

LinkedList.prototype.kthFromLast1 = function(k) {
  var result;
  /// This is the helper function to do the recursion
  function helper(head, k){
  /// If head equals null (reached end of list) return 0
  	if(head == null){
    	return 0;
    }
  	/// Create an index that increases as the recursive call stack is called.
  	/// Meaning it increases as it comes back from the end.
  	var index = helper(head.next, k) + 1;
  	/// If the index equals k
  	if(index == k){
      	/// set the return result to the kthfromend element
      	result = head.data;
    }
  	/// Returns the index value.
  	return index;
  }

  helper(this.head, k);
  return result;
}

LinkedList.prototype.kthFromLast2 = function(k){
  /// Assign two head pointers.
	var p1 = this.head;
	var p2 = this.head;
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

LinkedList.prototype.deleteMiddleNode = function(node){
  /// Make sure it's not one of the last nodes.
	if(node == null || node.next == null){
  	return false;
  }
	/// Set the next node to the values for the middle node.
	var next = node.next;
	/// Set the next data to the middle node data.
	node.data = next.data;
	/// Set the next pointer to the middle node pointer.
	node.next = next.next;
	return true;
}


/// Stable version that uses 4 different nodes to keep track of the lists.
LinkedList.prototype.partition1 = function(partition){
  var beforeStart;
  var beforeEnd;
  var afterStart;
  var afterEnd;

  var node = this.head;
  /// While Linked List has values.
  while(node) {
    /// Keep a value of the next node.
    var next = node.next;
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
LinkedList.prototype.partition2 = function(partition){
  var node = this.head;
	var head = node;
  var tail = node;

	while(node) {
    var next = node.next;

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

linked.removeDuplicates2();
console.log("Removed Duplicates");
linked.print(linked.getHead());
console.log();

/*
//linked.kthFromLast1(3);
console.log("Printing the kth element");
//var middle = linked.kthFromLast1(4);
var middle = linked.kthFromLast2(4);
console.log(middle);
console.log();

console.log("Deleted Middle Node");
console.log(linked.deleteMiddleNode(middle));
linked.print();
console.log();
*/

console.log("The partion of the list");
var result = linked.partition2(5);
linked.print(result);
console.log();
