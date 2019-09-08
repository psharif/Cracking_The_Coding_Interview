const { LinkedList } = require('./LinkedListES6.js');

const removeDuplicates1 = node => {
  /// Create a hash set
  const set = {};

  let current = node;
  let prev = node;

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

const removeDuplicates2 = node => {
  /// Check each element in the list.
  let candidate = node;

  while(candidate) {
    /// Have another pointer that will check every other element
    let runner = candidate;
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

removeDuplicates2(linked.getHead());
console.log("Removed Duplicates");
linked.print(linked.getHead());
console.log();
