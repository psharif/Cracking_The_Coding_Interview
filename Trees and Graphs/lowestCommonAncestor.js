const { TreeNode, BinarySearchTree } = require("./binarySearchTree.js");

// 4.8 First Common Ancestor: Design an algorithm and write code to find the
// first common ancestor of two nodes in a binary tree.
// Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree.

/// first we must design an insert method to insert a treenode without
/// any reference to order.

const lowestCommonAncestor = (root, n1, n2) => {
  /// If the root is null return null
  if (root === null) return null;
  /// If n1 or n2 equal the root return root
  if (root.data == n1.data || root.data == n2.data) return root;
  /// otherwise look left
  const left = lowestCommonAncestor(root.left, n1, n2);
  /// now look right
  const right = lowestCommonAncestor(root.right, n1, n2);
  /// If both the n1 and n2 are not null return root
  if (left !== null && right !== null) return root;
  /// If both left n1 and n2 equal null return null
  if (left == null && right == null) return null;
  /// else return if left does not equal null return left else return right.
  return left !== null ? left : right;
};

const bTree = new BinarySearchTree();

bTree.insertNonSearch(1);
bTree.insertNonSearch(13);
bTree.insertNonSearch(6);
bTree.insertNonSearch(7);
bTree.insertNonSearch(12);
bTree.insertNonSearch(3);
bTree.insertNonSearch(10);

//console.log(bTree);
const root = bTree.getRootNode();

bTree.inorder(root);

const n1 = bTree.getNodeNonSearch(root, 7);
const n2 = bTree.getNodeNonSearch(root, 12);

console.log(lowestCommonAncestor(root, n1, n2));
