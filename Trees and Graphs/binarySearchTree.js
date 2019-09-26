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
   // function to be implemented
   // insert(data)
  insert(data) {
    const node = new treeNode(data);
    if(this.root == null) {
      this.root = node
    }

    insertNode(this.root, node);
  }

  insertNode(node, newNode) {
    if(node.data >= newNode.data) {
      if(node.left == null){
        node.left = newNode;
      }
      this.insertNode(node.left, newNode);
    }
    else {
      if(node.right == null){
        node.right = newNode;
      }
      this.insertNode(node.right, newNode);
    }
  }
   // remove(data)
  

   // Helper function
   // findMinNode()
   // getRootNode()
   // inorder(node)
   // preorder(node)
   // postorder(node)
   // search(node, data)

}
