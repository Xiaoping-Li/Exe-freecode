function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Add node method
  this.add = function(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      if (this.root.value >= value) {
        if (this.root.left) {
          this.root.left.add(value);
        } else {
          this.root.left = new BinarySearchTree();
          this.root.left.root = new Node(value);
        }
      } else {
        if (this.root.right) {
          this.root.right.add(value);
        } else {
          this.root.right = new BinarySearchTree();
          this.root.right.root = new Node(value);
        }
      }
    }
    return value;
  }
  // 
}
