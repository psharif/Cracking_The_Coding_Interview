const { LinkedList, Node } = require('../Linked\ Lists/LinkedListES6.js');
const { TreeNode, BinarySearchTree } = require('./binarySearchTree.js');

// List of Depths: Given a binary tree,
// design an algorithm which creates a linked list of all the
// nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

// Though we might think at first glance that this problem requires a
// level-by-level traversal, this isn't actually necessary.
// We can traverse the graph any way that we'd like, provided we know
// which level we're on as we do so.
// We can implement a simple modification of the pre-order traversal
// algorithm, where we pass in level + 1 to the next recursive call.
// The code below provides an implementation using depth-first search.
const createLevelLinkedList = (treeNode, lists, level) => {
  // If we hit a condition where the root equals null. We return.
  if(treeNode == null) return;
  // We then create a new variable to keep track of the list we are adding to.
  let list = null;
  // If the size of our array is equal to the level we are processing.
  if(lists.length == level) {
    // This means we have not traversed this level create a new LinkedList.
    list = new LinkedList();
    // Add this linked list into the array.
    lists.push(list);
  }
  else {
    // We have this list in the lists array get the level of the
    // Find the level of the list we are on.
    list = lists[level];
  }
  // If we have not reached the end add the root to the list.
  list.addData(treeNode.data);

  // Recurse. (We have processed the node move to the next one.)
  // First recurse through the left
  createLevelLinkedList(treeNode.left, lists, level + 1);
  // Recurse through the right.
  createLevelLinkedList(treeNode.left, lists, level + 1);
  // Since it doesn't return the lists
  console.log(lists);
}

/*
///Create a Tree
const tree = new BinarySearchTree();

tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

tree.inorder(tree.getRootNode());

createLevelLinkedList(tree.getRootNode(), [], 0);
*/
