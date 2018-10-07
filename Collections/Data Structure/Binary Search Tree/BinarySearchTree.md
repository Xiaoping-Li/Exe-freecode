https://learn.freecodecamp.org/coding-interview-prep/data-structures/find-the-minimum-and-maximum-value-in-a-binary-search-tree/

A `tree` data structure begins with one node, typically referred to as the `root`, and from here branches out to additional nodes, each of which may have more child nodes, and so on and so forth. The data structure is usually visualized with the root node at the top; you can think of it as a natural tree flipped upside down.

The root node is the top of the tree. Data points in the tree are called nodes. Nodes with branches leading to other nodes are referred to as the parent of the node the branch leads to (the child). Other more complicated familial terms apply as you might expect. A subtree refers to all the descendants of a particular node, branches may be referred to as edges, and leaf nodes are nodes at the end of the tree that have no children. Finally, note that trees are inherently recursive data structures. That is, any children of a node are parents of their own subtree, and so on. The recursive nature of trees is important to understand when designing algorithms for common tree operations.

While the tree data structure can have any number of branches at a single node, a `binary tree` can only have two branches for every node. Furthermore, a `binary search tree` is ordered with respect to the child subtrees, such that the value of each node in the left subtree is less than or equal to the value of the parent node, and the value of each node in the right subtree is greater than or equal to the value of the parent node. 


