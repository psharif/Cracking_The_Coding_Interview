class TreeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
    this.size = 1;
  }

  insertInOrder(val) {
    if (val <= this.data) {
      if (this.left == null) {
        this.left = new TreeNode(val);
      } else {
        this.left.insertInOrder(val);
      }
    } else {
      if (this.right == null) {
        this.right = new TreeNode(val);
      } else {
        this.right.insertInOrder(val);
      }
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getData() {
    return this.data;
  }

  getIthNode(index) {
    const leftSize = this.left == null ? 0 : this.left.getSize();
    console.log(leftSize);
    console.log(index);
    if (index < leftSize) {
      return this.left.getIthNode(index);
    } else if (leftSize == index) {
      return this;
    } else {
      return this.right.getIthNode(index - (this.left.getSize() + 1));
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert(data) - Helper method used to call insertNode with a created node.
  insertInOrder(data) {
    if (this.root == null) {
      this.root = new TreeNode(data);
      return;
    }

    this.root.insertInOrder(data);
  }

  // getRootNode()
  getRootNode() {
    return this.root;
  }
}

const getRandomNode = tree => {
  const root = tree.getRootNode();
  if (root == null) return null;
  const index = Math.floor(Math.random() * root.getSize());
  return root.getIthNode(index);
};

///Create a Tree
const tree = new BinarySearchTree();

/// Error tree
tree.insertInOrder(4);
tree.insertInOrder(2);
tree.insertInOrder(6);
tree.insertInOrder(5);
tree.insertInOrder(7);
tree.insertInOrder(3);
tree.insertInOrder(1);

console.log(getRandomNode(tree));
