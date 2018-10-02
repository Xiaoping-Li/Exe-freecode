// Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the 
// original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. 
// We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an 
// empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. 
// These attributes make it a popular and useful sorting method.

// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted 
// order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. 
// For simplicity, the first or last element could be used.

// Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is
// defined. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. 
 
// Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting. It is very similar to 
// selection sort, except that it does not always choose worst-case partition.
// https://en.wikipedia.org/wiki/Quicksort


// Quick Sort Pivot Algorithm
/* 
Based on our understanding of partitioning in quick sort, we will now try to write an algorithm for it, which is as follows.

Step 1 − Choose the highest index value has pivot
Step 2 − Take two variables to point left and right of the list excluding pivot
Step 3 − left points to the low index
Step 4 − right points to the high
Step 5 − while value at left is less than pivot move right
Step 6 − while value at right is greater than pivot move left
Step 7 − if both step 5 and step 6 does not match swap left and right
Step 8 − if left ≥ right, the point where they met is new pivot
*/
// https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm

// Solution: Partial
function quickSort(array) {

}

