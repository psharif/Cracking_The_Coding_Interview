const { TreeNode } = require('./binarySearchTree.js');

function minimalTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null;
    }
    /// Find the middle of the array.
    const mid = Math.floor((end - start) / 2 + start);
    const node = new TreeNode(arr[mid]);
    // Base case where we've ran out of values in array
    node.left = minimalTree(arr, start, mid - 1);
    /// Find the middle of the left. (Recurse)
    node.right = minimalTree(arr, mid + 1, end);
    /// Find the middle of the right. (Recurse)
    return node;
}

const inorder = (node) => {
  if(node !== null) {
    /// Keep traversing till you've reached the last left node.
    inorder(node.left);
    /// process the node.
    console.log(node.data);
    /// Now check the right branch of this node.
    inorder(node.right);
  }
}

const tree = minimalTree([1,2,3,4,5,6,7]);
console.log(tree);
inorder(tree);
