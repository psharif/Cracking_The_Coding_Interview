class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }

  setNext(node){
    this.next = node;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  addData(data) {
    /// Create a new node with your data
    /// And next pointer pointing to null
    const newNode = new Node(data);

    /// If head is pointing to null.
    /// Make the head point to the new node.
    if(!this.head) {
      this.head = newNode;
    }
    else {
      /// Create a variable to point to head.
      let current = this.head;

        /// Find the last node in the list. It will point to null.
        while(current.next) {
            current = current.next;
        }
        /// Set the last node to now point to the new Node.
        current.next = newNode
    }

    this.size++;
  }


  removeData(data) {
    /// If head is pointing to null.
    /// Make the head point to the new node.
    if(!this.head) {
      return;
    }
    else {
      /// Create a variable to point to head.
      let current = this.head;
      let prev = this.head

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

  insertAt(index, data) {
    /// Check if the index is less than
    /// 0 or greater than size of linked list.
    if(index < 0 || index > this.size){
      console.log("index out of range");
      return;
    }

    const newNode = new Node(data);
    /// if the index is 0 set the new node to the front node, then point head to it.
    if(index == 0){
      newNode.next = this.head;
      this.head = newNode;
    }
    else{
      /// Otherwise look for the current node with that index.
      /// Keep a current an previous pointer.
      let cur = this.head;
      let prev = this.head;
      let iter = 0;
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

  removeAt(index) {
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
      let cur = this.head;
      let prev = this.head;
      let iter = 0;
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

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size == 0;
  }

  getHead() {
  	return this.head;
  }

  print(head) {
    let current = head;
    let str = "head";

    while(current) {
        str += "->" + current.data;
        current = current.next;
    }

    console.log(str + "->null");
  }
}

module.exports = { Node, LinkedList };
