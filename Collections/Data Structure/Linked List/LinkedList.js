function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){ 
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };
  // Add element to Linked List
  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        let currentNode = head;
        while(currentNode.next){
            currentNode  = currentNode.next;
        }
        currentNode.next = node;
    }
    length++;
  }; 
  
  // Remove element from Linked List if element exist
  this.remove = function(element){
    if (head.element === element) {
      head = head.next;
      length--;
      return element;
    }
    
    let prev = head;
    let current = prev.next;
    while(current.next) {
      if (current.element === element) {
        prev.next = current.next;
        length--;
        return element;
      }
      prev = prev.next;
    }
    return null;
  };
  
//   this.remove = function(element){
//     var currentNode = head;
//     var previousNode;
//     if(currentNode.element === element){
//         head = currentNode.next;
//     } else {
//         while(currentNode.element !== element) {
//             previousNode = currentNode;
//             currentNode = currentNode.next;
//         }
//         previousNode.next = currentNode.next;
//     }
//     length --;
//   };
  // Return Boolean that checks if the linked list is empty
  this.isEmpty = function() {
    return this.size() === 0;
  }
  // returns the index of a given element, If the element is not found in the linked list, return -1
  this.indexOf = function(element) {
    let current = head;
    let index = 0;
    while(current) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  // returns the element at the given index. If no element is found, return undefined.
  this.elementAt = function(index) {
    if (index >= this.size() || index < 0 || !head) {
      return undefined;
    } else {
      let current = head;
      while (index > 0) {
        current = current.next;
        index--;
      }
      return current.element;
    } 
  }
}
