const { LinkedList, Node } = require("../Linked Lists/LinkedListES6.js");
const { TreeNode, BinarySearchTree } = require("./binarySearchTree.js");

// Check Balanced: Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

const getHeight = root => {
  if (root === null) return -1;
  else return Math.max(getHeight(root.left), getHeight(root.left)) + 1;
};

const checkBalanced = root => {
  if (root == null) return true;

  const heightDiff = getHeight(root.left) - getHeight(root.right);
  /// Make sure both branches are balanced.
  if (Math.abs(heightDiff) > 1) return false;
  else return checkBalanced(root.left) && checkBalanced(root.right);
};

///Create a Tree
const tree = new BinarySearchTree();

tree.insert(7);
tree.insert(5);
tree.insert(6);
tree.insert(4);
tree.insert(1);
tree.insert(3);
tree.insert(10);

//tree.inorder(tree.getRootNode());

console.log(checkBalanced(tree.getRootNode()));
