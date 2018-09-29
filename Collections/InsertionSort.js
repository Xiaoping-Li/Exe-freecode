// This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. 
// Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
// It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. 
// This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in 
// sorted order from least to greatest.

// Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion 
// sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. 
// It repeats until no input elements remain.
// https://en.wikipedia.org/wiki/Insertion_sort
