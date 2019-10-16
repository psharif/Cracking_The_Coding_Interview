const { TreeNode, BinarySearchTree } = require("./binarySearchTree.js");
/// Function to tell if two binary trees are the same.

const isSame = (n1, n2) => {
  if (n1 == null && n2 == null) {
    return true;
  } else if (
    n1 !== null &&
    n2 !== null &&
    n1.data == n2.data &&
    isSame(n1.left, n2.left) &&
    isSame(n1.right, n2.right)
  ) {
    return true;
  } else return false;
};

const bTree1 = new BinarySearchTree();
const bTree2 = new BinarySearchTree();
const bTree3 = new BinarySearchTree();

bTree1.insert(4);
bTree1.insert(2);
bTree1.insert(6);
bTree1.insert(5);
bTree1.insert(7);
bTree1.insert(3);
bTree1.insert(1);

bTree2.insert(4);
bTree2.insert(2);
bTree2.insert(6);
bTree2.insert(5);
bTree2.insert(7);
bTree2.insert(3);
bTree2.insert(1);

bTree3.insert(4);
bTree3.insert(2);
bTree3.insert(6);
bTree3.insert(5);
bTree3.insert(8);
bTree3.insert(3);
bTree3.insert(1);

//bTree1.inorder(bTree1.getRootNode());
//bTree2.inorder(bTree2.getRootNode());

const same = isSame(bTree1.getRootNode(), bTree2.getRootNode());
const notSame = isSame(bTree1.getRootNode(), bTree3.getRootNode());

console.log(same);
console.log(notSame);
