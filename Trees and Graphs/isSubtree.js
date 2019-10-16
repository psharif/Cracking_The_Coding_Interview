const { TreeNode, BinarySearchTree } = require("./binarySearchTree.js");
const { isSame } = require("./isSame.js");

/// Check if a tree is a subtree of another.
const isSubtree = (parent, sub) => {
  if (sub == null) return true;
  else if (parent == null) return false;
  else if (isSame(parent, sub)) return true;
  return isSubtree(parent.left, sub) || isSubtree(parent.right, sub);
};

const bTree = new BinarySearchTree();
const bTree2 = new BinarySearchTree();

bTree.insert(4);
bTree.insert(2);
bTree.insert(6);
bTree.insert(5);
bTree.insert(7);
bTree.insert(3);
bTree.insert(1);

bTree2.insert(6);
bTree2.insert(5);
bTree2.insert(7);

const result = isSubtree(bTree.getRootNode(), bTree2.getRootNode());

console.log(result);
