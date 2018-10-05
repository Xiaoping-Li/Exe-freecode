// Doubly Linked List. As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.
// This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an 
// additional reference to the previous node in the list.

// Define Node object
const Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

// Defind Double Linked List object
const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  
  // Add the given element to the list 
  this.add = function(element, prev = null) {
    const newNode = new Node(element, prev);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return newNode.data;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode.data;
    }
  };
  
  // Remove all occurrences of a given element in the list
  this.remove = function(element) {
    // return null if list is empty
    if (!this.head && !this.tail) return null;
    // condition: Only one item in this list
    if (this.head.data === element && !this.head.next) {
      this.head = null;
      this.tail = null;
      return element;
    }
    
    // If the list has more than one item and the head.data === element
    if (this.head.data === element && this.head.next) {
      let newHead = this.head.next;
      this.head.next.prev = null;
      this.head.next = null;
      this.head = newHead;
    }
    // After remove the qualified head, move on to the rest of the list, except the tail of the list
    let current = this.head;
    while(current.next) {
      let next = current.next;
      let prev = current.prev;
      if (current.data === element) {
        current.prev.next = next;
        current.next.prev = prev;
      }
      current = current.next;
    }
    // After the while loop, current is the tail of the list, handle the condition that tail.data === element
    let prevTail = current.prev;
    if (current.data === element) {
      current.prev.next = null;
      this.tail = prevTail;
    }
  };
  
  // Reverse a Doubly Linked List. Trying to reverse an empty list should return null.
  
};
