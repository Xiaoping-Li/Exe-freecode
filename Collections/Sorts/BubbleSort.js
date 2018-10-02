// The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, 
// iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out 
// of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

// Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted 
// order from least to greatest.

// Instructions: Starting from the beginning of the list, compare every adjacent pair, swap their position if they are not in the right 
// order (the latter one is smaller than the former one). After each iteration, one less element (the last one) is needed to be compared 
// until there are no more elements left to be compared.
// https://en.wikipedia.org/wiki/Bubble_sort#/media/File:Bubble-sort-example-300px.gif

// Solutions:
function bubbleSort(array) {
  let count = array.length - 1;
  while (count > 0) {
    for (let i = 0; i < count; i++) {
      let current = array[i];
      let next = array[i + 1];
      if (current > next) {
        array[i] = next;
        array[i + 1] = current;
      }
    }
    count--;
  }
  return array;
}

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
// const array = [8,7, 5,4,1,6,2,3];
bubbleSort(array);
