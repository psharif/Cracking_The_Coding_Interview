///Copied from

class treeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

   // insert(data) - Helper method used to call insertNode with a created node.
  insert(data) {
    const node = new treeNode(data);
    if(this.root == null) {
      this.root = node
    }

    insertNode(this.root, node);
  }

  insertNode(node, newNode) {
    if(node.data >= newNode.data) {
      /// If the data being added is less than or equal to the current node.
      /// Check if the node has a left child if it doesn't insert it.
      if(node.left == null){
        node.left = newNode;
      }
      /// If it does look left
      this.insertNode(node.left, newNode);
    }
    else {
      /// If the node data is less than the new Node's data go right.
      /// If there is no right node insert the node.
      if(node.right == null) {
        node.right = newNode;
      }
      /// Otherwise look right.
      this.insertNode(node.right, newNode);
    }
  }
   // remove(data) - Helper method to call removeNode with the root.
   remove(data) {
     return removeNode(this.root, data);
   }
   /// removeNode removes the node that has the value of the data you are searching for.
   removeNode(node, data) {
     if(node.data > data){
       /// If the current node has a value greater than what
       /// we are looking for search left.
       this.left = this.removeNode(node.left, data);
     }
     else if(node.data < data){
       /// If the current node has a value less than what
       /// we are looking for search right.
       this.right = this.removeNode(node.right, data);
     }
     else {
       /// The current node has the data we are looking for.

       ///If the current node has no child nodes.
       if(node.left == null && node.right == null) {
         ///set the node to null and return it.
         node = null;
         return node;
       }
       else if(node.right == null) {
         /// If the element only has a left child node set the removed node to the left child
         node = node.left;
         return node;
       }
       else if (node.left == null) {
         /// If the element only has a left child node set the removed node to the right child
         node = node.right;
         return node;
       }

       /// Otherwise the node we want to remove has two children. We need to reset this.
       /// Find the middle node on the right side of the tree.
       const replace = this.findMinNode(this.right);
       /// Set the data in the removed node to the data in the replacement node.
       node.data = replace.data;
       /// Remove the replacement node and set the edited tree back on the node.
       this.right = this.removeNode(this.right, replace);
       return node;
     }
   }

   // Helper function

   // To find the Min Node
   // Find the most left node
   findMinNode() {
     const node = this.getRoot();
     while(node.left !== null) {
       node = node.left;
     }
     return node;
   }

   // getRootNode()
   getRootNode() {
     if(this.root !== null) {
       return this.root;
     }
   }
   // inorder(node)
   inorder(node) {

   }
   // preorder(node)
   // postorder(node)
   // search(node, data)

}
