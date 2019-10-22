const { TreeNode, BinarySearchTree } = require("./binarySearchTree.js");
// 4.12 Paths with Sum: You are given a binary tree in which
// each node contains an integer value (which might be positive or negative).
// Design an algorithm to count the number of paths that sum to a given value.
// The path does not need to start or end at the root or a leaf,
// but it must go downwards (traveling only from parent nodes to child nodes).

const numberOfSumPaths = (node, target) => {
  /// Three variables to keep track of the count of number of paths.
  /// the sum during each traversal, and a stack to keep track of the sum.
  let count = 0,
    sum = 0,
    stack = [];

  const inorderSum = (node, target) => {
    /// Inorder Traversal Base case check
    if (node == null) return;
    /// Push in the node (value) of the data you are looking at.
    stack.push(node.data);
    /// Add this node to the sum
    sum += node.data;
    /// If the sum equals the target sum we are looking for.
    if (sum == target) count++;
    /// Inorder Traversal goes left first.
    inorderSum(node.left, target);
    /// Then go right.
    inorderSum(node.right, target);
    /// When we have reached a leaf node pop the current value from the stack and
    /// subtract it from the sum
    sum -= stack.pop();
  };
  /// initial call for the recursive helper function.
  inorderSum(node, target);
  /// Returns the count of the times we found the path
  return count;
};

/*
///Create a Tree
const tree = new BinarySearchTree();

///tree
tree.insertNonSearch(3);
tree.insertNonSearch(8);
tree.insertNonSearch(7);
tree.insertNonSearch(4);
tree.insertNonSearch(12);
tree.insertNonSearch(5);
tree.insertNonSearch(12);
tree.insertNonSearch(9);
tree.insertNonSearch(8);
tree.insertNonSearch(13);

tree.preorder(tree.getRootNode());

const count = numberOfSumPaths(tree.getRootNode(), 23);

console.log("The count is " + count);
*/
