///Copied from

class TreeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert(data) - Helper method used to call insertNode with a created node.
  insert(data) {
    const node = new TreeNode(data);
    if (this.root == null) {
      this.root = node;
      return;
    }

    this.insertNode(this.root, node);
  }

  insertNode(node, newNode) {
    if (node.data >= newNode.data) {
      /// If the data being added is less than or equal to the current node.
      /// Check if the node has a left child if it doesn't insert it.
      if (node.left == null) {
        node.left = newNode;
        return;
      }
      /// If it does look left
      this.insertNode(node.left, newNode);
    } else {
      /// If the node data is less than the new Node's data go right.
      /// If there is no right node insert the node.
      if (node.right == null) {
        node.right = newNode;
        return;
      }
      /// Otherwise look right.
      this.insertNode(node.right, newNode);
    }
  }
  // remove(data) - Helper method to call removeNode with the root.
  remove(data) {
    return this.removeNode(this.root, data);
  }
  /// removeNode removes the node that has the value of the data you are searching for.
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      /// If the current node has a value greater than what
      /// we are looking for search left.
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      /// If the current node has a value less than what
      /// we are looking for search right.
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      /// The current node has the data we are looking for.

      ///If the current node has no child nodes.
      if (node.left == null && node.right == null) {
        ///set the node to null and return it.
        node = null;
        return node;
      } else if (node.right == null) {
        /// If the element only has a left child node set the removed node to the left child
        node = node.left;
        return node;
      } else if (node.left == null) {
        /// If the element only has a left child node set the removed node to the right child
        node = node.right;
        return node;
      }

      /// Otherwise the node we want to remove has two children. We need to reset this.
      /// Find the middle node on the right side of the tree.
      const replace = this.findMinNode(node.right);
      /// Set the data in the removed node to the data in the replacement node.
      node.data = replace.data;
      /// Remove the replacement node and set the edited tree back on the node.
      node.right = this.removeNode(node.right, replace);
      return node;
    }
  }

  // Helper function

  // To find the Min Node
  // Find the most left node
  findMinNode(node) {
    if (node.left == null) return node;
    else return this.findMinNode(node.left);
  }

  // getRootNode()
  getRootNode() {
    return this.root;
  }
  // inorder(node) - prints the tree in order.
  inorder(node) {
    if (node !== null) {
      /// Keep traversing till you've reached the last left node.
      this.inorder(node.left);
      /// process the node.
      console.log(node.data);
      /// Now check the right branch of this node.
      this.inorder(node.right);
    }
  }
  // preorder(node) - prints the current node then it's children.
  preorder(node) {
    if (node !== null) {
      /// process the node
      console.log(node.data);
      /// Now go to the left branch
      this.preorder(node.left);
      /// Now go to the right branch
      this.preorder(node.right);
    }
  }
  // postorder(node) - prints the children of the node then itself.
  postorder(node) {
    if (node !== null) {
      /// Go left
      this.postorder(node.left);
      /// Go right
      this.postorder(node.right);
      /// Process the node
      console.log(node.data);
    }
  }
  // search(node, data)
  search(node, data) {
    // if trees is empty return null
    if (node == null) {
      return null;
    }
    // if data is less than node's data
    // move left
    else if (data < node.data) {
      return this.search(node.left, data);
    }
    // if data is less than node's data
    // move left
    else if (data > node.data) {
      return this.search(node.right, data);
    }
    // if data is equal to the node data
    // return node
    else {
      return node;
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
/*
const tree = new BinarySearchTree();

tree.insert(8);
tree.insert(4);
tree.insert(12);
tree.insert(6);
tree.insert(7);
tree.insert(10);
tree.insert(2);
tree.insert(14);
tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(3);
tree.insert(11);
tree.insert(13);
tree.insert(15);

tree.remove(14);
tree.remove(5);

const result = tree.search(tree.getRootNode(), 6);

console.log(result);


tree.inorder(tree.getRootNode());
//tree.preorder(tree.getRootNode());
//tree.postorder(tree.getRootNode());
*/
