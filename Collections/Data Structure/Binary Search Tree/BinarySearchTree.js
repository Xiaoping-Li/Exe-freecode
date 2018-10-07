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
  // Find Min value in the tree
  this.findMin = function() {
    if (!this.root) return null;
    let min = this.root;
    while (min.left) {
      min = min.left.root;
    }
    return min.value;
  };
  // Find Max value in the tree
  this.findMax = function() {
    if (!this.root) return null;
    let max = this.root;
    while (max.right) {
        max = max.right.root;
    }
    return max.value;
  };
}
