const { LinkedList, Node } = require("../Linked Lists/LinkedListES6.js");
const { TreeNode, BinarySearchTree } = require("./binarySearchTree.js");

// Check Balanced: Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

/// Simpler Solution
const getHeight1 = root => {
  if (root === null) return -1;
  else return Math.max(getHeight1(root.left), getHeight1(root.left)) + 1;
};

const checkBalanced1 = root => {
  if (root == null) return true;

  const heightDiff = getHeight(root.left) - getHeight(root.right);
  /// Make sure both branches are balanced.
  if (Math.abs(heightDiff) > 1) return false;
  else return checkBalanced1(root.left) && checkBalanced1(root.right);
};

/// Optimal Solution
const getHeight2 = root => {
  if (root == null) return -1;

  const leftHeight = getHeight2(root.left);
  if (leftHeight == "error") return "error";

  const rightHeight = getHeight2(root.right);
  if (leftHeight == "error") return "error";

  const heightDiff = getHeight2(root.left) - getHeight2(root.right);
  /// Make sure both branches are balanced.
  if (Math.abs(heightDiff) > 1) return "error";
  else return Math.max(leftHeight, rightHeight) + 1;
};

const checkBalanced2 = root => {
  return getHeight2(root) !== "error";
};

///Create a Tree
const tree = new BinarySearchTree();
const errorTree = new BinarySearchTree();

/*
/// Error tree
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(1);

/// Error tree
errorTree.insert(7);
errorTree.insert(5);
errorTree.insert(6);
errorTree.insert(4);
errorTree.insert(1);
errorTree.insert(3);
errorTree.insert(10);

console.log(checkBalanced2(tree.getRootNode()));
console.log(tree);
console.log();
console.log(checkBalanced2(errorTree.getRootNode()));
console.log(errorTree);
*/
