https://learn.freecodecamp.org/coding-interview-prep/data-structures/find-the-minimum-and-maximum-value-in-a-binary-search-tree/

A `tree` data structure begins with one node, typically referred to as the `root`, and from here branches out to additional nodes, each of which may have more child nodes, and so on and so forth. The data structure is usually visualized with the root node at the top; you can think of it as a natural tree flipped upside down.

The root node is the top of the tree. Data points in the tree are called nodes. Nodes with branches leading to other nodes are referred to as the parent of the node the branch leads to (the child). Other more complicated familial terms apply as you might expect. A subtree refers to all the descendants of a particular node, branches may be referred to as edges, and leaf nodes are nodes at the end of the tree that have no children. Finally, note that trees are inherently recursive data structures. That is, any children of a node are parents of their own subtree, and so on. The recursive nature of trees is important to understand when designing algorithms for common tree operations.

While the tree data structure can have any number of branches at a single node, a `binary tree` can only have two branches for every node. Furthermore, a `binary search tree` is ordered with respect to the child subtrees, such that the value of each node in the left subtree is less than or equal to the value of the parent node, and the value of each node in the right subtree is greater than or equal to the value of the parent node. 

Binary search trees are very common and useful data structures because they provide logarithmic time in the average case for several common operations such as lookup, insertion, and deletion.

Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case, and linear time in the worst case. Why is this? Each of those basic operations requires us to find an item in the tree (or in the case of insertion to find where it should go) and because of the tree structure at each parent node we are branching left or right and effectively excluding half the size of the remaining tree. This makes the search proportional to the logarithm of the number of nodes in the tree, which creates logarithmic time for these operations in the average case.

Ok, but what about the worst case? Well, consider constructing a tree from the following values, adding them left to right: 10, 12, 17, 25. Following our rules for a binary search tree, we will add 12 to the right of 10, 17 to the right of this, and 25 to the right of this. Now our tree resembles a linked list and traversing it to find 25 would require us to traverse all the items in linear fashion. Hence, linear time in the worst case. The problem here is that the tree is unbalanced. We'll look a little more into what this means in the following challenges.


