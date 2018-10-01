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

// As the read head reads, it can remove values or keep them:
// [null, null, null, 4, 5]
// ^Read @ 3
// ^Write @ 3
// Once the write reaches the end of the array it loops back to the beginning:
// [f, null, null, d, e]
// ^Read @ 3
// ^Write @ 1
// This approach requires a constant amount of memory but allows files of a much larger size to be processed.
