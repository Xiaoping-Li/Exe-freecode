// Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 
// It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. 
// It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. 
// Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in 
// sorted order from least to greatest.

// Solution:
function selectionSort(array) {
  // change code below this line
  const num = array.length - 1;
  const minObj = {min: array[0], idx: 0};
  for (let i = 0; i < num; i++) {
    minObj.min = array[i];
    minObj.idx = i;
    for (let j = i + 1; j <= num; j++) {
      if (array[j] < minObj.min) {
        minObj.min = array[j];
        minObj.idx = j;
      }
    }

    if (minObj.idx !== i) {
      let current = array[i];
      array[i] = minObj.min;
      array[minObj.idx] = current;
    }
  }
  // change code above this line
  return array;
}

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
// const array = [8,7, 5,4,1,6,2,3];
selectionSort(array);
