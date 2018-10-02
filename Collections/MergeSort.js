// Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that 
// it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so 
// how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of 
// an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the 
// recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, 
// then, are:

// 1) Recursively split the input array in half until a sub-array with only one element is produced.
// 2) Merge each sorted sub-array together to produce the final sorted array.

// Algorithm
// Merge sort keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the
// list, it is sorted. Then, merge sort combines the smaller sorted lists keeping the new list sorted too.
// Step 1 − if it is only one element in the list it is already sorted, return.
// Step 2 − divide the list recursively into two halves until it can no more be divided.
// Step 3 − merge the smaller lists into new list in sorted order.
// https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm

// Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted 
// order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for 
// merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces 
// single-item arrays to feed into merge.

//Solution:
function mergeSort(array) {
  if (array.length === 1) return array;
  let n = Math.floor(array.length / 2);
  let left = array.slice(0, n);
  let right = array.slice(n);

  const merge = (left, right) => {
    const mergeArray = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        mergeArray.push(left[leftIdx]);
        leftIdx++;
      }
      mergeArray.push(right[rightIdx]);
      rightIdx++;
    }
    return mergeArray.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  }

  return merge(mergeSort(left), mergeSort(right));
}

const test = [6,5,3,1,8,7,2,4];
mergeSort(test);
