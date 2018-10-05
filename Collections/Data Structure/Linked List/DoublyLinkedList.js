// Doubly Linked List. As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.
// This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an 
// additional reference to the previous node in the list.

// Define Node class
const Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

// Defind Double Linked List class
const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  
};
