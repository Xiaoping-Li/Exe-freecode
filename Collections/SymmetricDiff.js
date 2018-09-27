// Find the Symmetric Difference
// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the 
// set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference 
// you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both 
// (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

// Examples:
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]

// Partial solution: Didn't pass tests
function sym(args) {
  const result = [];
  const argus = [...arguments];
  for (let i = 0; i < argus.length; i++) {
    let subArray = argus.slice();
    subArray.splice(i, 1);
    const concatSubArray = subArray.reduce((acc, item) => acc.concat(item), []);
    // console.log(concatSubArray);
    for (let j = 0; j < argus[i].length; j++) {
      if (!concatSubArray.includes(argus[i][j]) && !result.includes(argus[i][j])) result.push(argus[i][j]);
    }
  }
  return result;
}
