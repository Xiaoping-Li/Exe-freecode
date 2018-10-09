function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Add node method
  this.add = function(value) {
    // BST basics are nodes, insert function recurses per node
    const insert = (node, value) => {
      if (node.value === value) return null;

      if (node.value > value) {
        if (!node.left) {
          node.left = new Node(value);
          return;
        } else {
          node = node.left;
          insert(node, value);
        }
      }

      if (node.value < value) {
        if (!node.right) {
          node.right = new Node(value);
          return;
        } else {
          node = node.right;
          insert(node, value);
        }
      }
    }
    // Set up BST.root, if it is null
    if (!this.root) {
      this.root = new Node(value);
    }
    // Recurse through all nodes started from this.root
    let current = this.root;
    insert(current, value);
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
