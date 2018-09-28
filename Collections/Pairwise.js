// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
// You may use multiple pairs that have the same numeric elements but different indices. 
// Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another 
// element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, 
// because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. 
// We can then write out the array with their indices and values.

// Example:
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.

// Solution:
function pairwise(arr, arg) {
  const idxArray = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let pair = arg - current;
    let idx = arr.indexOf(pair);
    if (idx !== -1 && !idxArray.includes(idx) && i !== idx) {
      idxArray.push(i, idx);
    }
  }

  console.log(idxArray);
  return idxArray.reduce((sum, item) => sum + item, 0);
}

pairwise([0, 0, 0, 0, 1, 1], 1);
