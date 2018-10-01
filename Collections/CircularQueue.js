// A circular queue is basically a queue that writes to the end of a collection then begins over writing itself at the beginning of the 
// collection. This is type of data structure has some useful applications in certain situations. For example, a circular queue can be 
// used for streaming media. Once the queue is full, new media data simply begins to overwrite old data.

// A good way to illustrate this concept is with an array:
// [1, 2, 3, 4, 5]
// ^Read @ 0
// ^Write @ 0
// Here the read and write are both at position 0. Now the queue gets 3 new records a, b, and c. Our queue now looks like:
// [a, b, c, 4, 5]
// ^Read @ 0
// ^Write @ 3
