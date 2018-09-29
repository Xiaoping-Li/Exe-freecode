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

// Solution 1: Time complexity: Big O(n * n * n) worst case for array.splice Big O (n)
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      let temp = array.splice(i, 1)[0];
      for (let j = i - 1; j >= 0; j--) {
        if (array[j] > temp && (!array[j - 1] || array[j - 1] <= temp)) {
          array.splice(j, 0, temp);
        }
      }
    }
  }
  return array;
}

// Solution 2: Time complexity: Big O(n * n)
function insertionSort(array) {
  // change code below this line
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > temp) {
        let swapVal = array[j];
        array[j + 1] = swapVal;
        array[j] = temp;
      }
    }
  }
  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
