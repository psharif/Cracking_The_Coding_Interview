const { TreeNode, BinarySearchTree } = require("./binarySearchTree.js");

// Successor: Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

/// Case 1: (Node has a right subtree)
/// Look for the leftmost node in the right subtree

/*               (10)
                /    \
             *(6)*   (14)
             /   \   /   \
           (3)   (8)(11) (12)
*/

/// Case 2: (Node does not have a right subtree)
/// Keep bubbling up the tree till you have reached
/// a parent node that has a left subtree contiaining
/// the current node.

/*               (10)
                /    \
             *(6)*  (14)
             /      /   \
           (3)    (11) (12)
*/

const successor = (tree, node) => {
  const root = tree.getRootNode();
  /// Case 1
  if (node.right !== null) return leftMost(node.right);
  /// Case 2
  else {
    return findSuccessorIterative(root, node);
    //return findSuccessorRecursive(root, node);
    //return findSuccessorWithParentNode(root, node);
  }
};

const leftMost = node => {
  let n = node;
  while (n.left !== null) {
    n = n.left;
  }
  return n;
};

const findSuccessorRecursive = (node, success, lastLeft = null) => {
  if (success.data == node.data || node == null) {
    return lastLeft;
  } else if (success.data < node.data) {
    lastLeft = node;
    return findSuccessor(node.left, success, lastLeft);
  } else {
    return findSuccessor(node.right, success, lastLeft);
  }
};

const findSuccessorIterative = (node, success, lastLeft = null) => {
  while (node !== null) {
    if (success.data == node.data) {
      break;
    } else if (success.data < node.data) {
      lastLeft = node;
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return lastLeft;
};

const findSuccessorWithParentNode = (node, success) => {
  // Not able to use because Tree insert of parent node says [circular]
  let n = node;
  let parent = node.parent;

  while (parent !== null && parent.left !== node) {
    n = parent;
    parent = parent.parent;
  }
  return n;
};

///Create a Tree
const case1Tree = new BinarySearchTree();
const case2Tree = new BinarySearchTree();

/// Case 1 tree
case1Tree.insert(10);
case1Tree.insert(7);
case1Tree.insert(15);
case1Tree.insert(4);
case1Tree.insert(8);
case1Tree.insert(12);
case1Tree.insert(18);

/// Case 2 tree
case2Tree.insert(14);
case2Tree.insert(9);
case2Tree.insert(15);
case2Tree.insert(7);
case2Tree.insert(10);
case2Tree.insert(3);
case2Tree.insert(8);

const search = case2Tree.search(case2Tree.getRootNode(), 3);

//console.log(`The successor is ${successor(case1Tree.getRootNode()).data}`);
//console.log(case1Tree);
console.log(
  `The successor is ${
    successor(case2Tree, search) == null
      ? null
      : successor(case2Tree, search).data
  }`
);
