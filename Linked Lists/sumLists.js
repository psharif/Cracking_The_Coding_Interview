const { LinkedList, Node } = require('./LinkedListES6.js');

const sumLists1 = (l1, l2, carry) => {
  /// Check if the the lists are null and carry is 0.
  if(l1 == null && l2 == null && carry == 0) {
    return null;
  }
  /// Create a new Node.
  const result = new Node();
  /// Create a value variable that will sum the
  /// Nodes of lists with the carry value.
  let value = carry;

  if(l1 !== null) {
    value += l1.data;
  }

  if(l2 !== null) {
    value += l2.data
  }
  /// Now get the digit to be added to the list.
  result.data = value % 10;
  /// If both lists aren't null.
  if(l1 !== null || l2 !== null) {
     /// Get the value of the next node.
     let  more = sumLists1(l1 == null ? null : l1.next,
                          l2 == null ? null : l2.next,
                          value >= 10 ? 1 : 0 );
     /// Set the value of more to as the next node for the result.
     result.setNext(more);
  }
  /// Return result.
  return result;
}

/// Counts the length of a linked list.
const len = (node) => {
  let num = 0;
  while(node) {
    num++;
    node = node.next;
  }
  return num;
}

/// Class to keep track of a sum and the node of that sum for SumLists.
class PartialSum {
  constructor(l1, l2) {
    this.sum = null;
    this.carry = 0;
  }
}

/// Steps used ot find the sum of l1 and l2 in forward order.
const sumLists2 = (l1, l2) => {
  /// Find the lengths of the two linked lists.
  const len1 = len(l1);
  const len2 = len(l2);

  /// Check if the lists are different lengths. Pad Zeroes as appropriate.
  if(len1 > len2) {
    padZeroes(l2, len1 - len2);
  }
  else{
    padZeroes(l1, len2 - len1);
  }
  /// Recurse to find the smallest place in the sum then eventually get back to the biggest.
  const sum = addLists(l1, l2);

  /// If there is no carry over from the previous partialSum then return the current sum node.
  /// Otherwise insert the carry at the front of the current sum and return that sum list.
  if(sum.carry == 0) {
    return sum.sum;
  }
  else {
    const node = insertBefore(sum.sum, sum.carry);
    return node;
  }
}

const addLists = (l1, l2) => {
  if(l1 == null && l2 == null){
    const sum = new PartialSum();
    return sum;
  }

  /// Add smaller digits recursively.
  /// Go to the end of the list to find the smaller digits.
  const sum = addLists(l1.next, l2.next);

  /// Add carry to current data
  const val = sum.carry + l1.data + l2.data;

  /// Insert sum of current digits.
  const fullResult = insertBefore(sum.sum, val % 10);

  /// Add sum and carry to the new partial Sum.
  /// Make sure to use floor because division works poorly in Javascript.
  sum.sum = fullResult;
  sum.carry = Math.floor(val / 10);
  return sum;
}

/// Pads a linkedList with zeroes in the beginning in case
/// lists are different lengths.
const padZeroes = (node, num) => {
  const head = node;

  for(let i = 0; i < num; i++) {
    head = insertBefore(head, 0);
  }

  return head;
}

/// Inserts a node at the front of sumList.
const insertBefore  = (list, data) => {
  const node = new Node(data);

  if(list !== null ){
    node.next = list;
  }

  return node;
}

const print = (head) => {
  let current = head;
  let str = "head";

  while(current) {
      str += "->" + current.data;
      current = current.next;
  }

  console.log(str + "->null");
}

const l1 = new LinkedList();
const l2 = new LinkedList();

l1.addData(6);
l1.addData(8);
l1.addData(5);

console.log("Added l1 numbers");
l1.print(l1.getHead());
console.log();

l2.addData(9);
l2.addData(3);
l2.addData(7);

console.log("Added l2 numbers");
l2.print(l2.getHead());
console.log();

console.log("Sum of the Lists Are");
var summed = sumLists1(l1.getHead(), l2.getHead(), 0);
print(summed);
console.log();
