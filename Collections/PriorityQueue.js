// A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. 
// This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are 
// dequeued. If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued 
// before all the others.

// For instance, let’s imagine we have a priority queue with three items:
// [[’kitten’, 2], [‘dog’, 2], [‘rabbit’, 2]]

// Here the second value (an integer) represents item priority. If we enqueue [‘human’, 1] with a priority of 1 (assuming lower priorities
// are given precedence) it would then be the first item to be dequeued. The collection would like this:
// [[‘human’, 1], [’kitten’, 2], [‘dog’, 2], [‘rabbit’, 2]].
