// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// Example 1: 
// permAlone("aab") should return 2.

// Example 2: 
// permAlone("aaa") should return 0.

// Example 3: 
// permAlone("a") should return 1.

// Example 4: 
// permAlone("aaab") should return 0.

// Example 5: 
// permAlone("aaabb") should return 12.


// Solution 1: 
function permAlone(str) {
  const strArr = str.split('');
  if (strArr.filter(item => item !== strArr[0]).length === 0) return 0;
  
  // Get number of total possible combinations
  const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  }
  let possibleCombi = factorial(str.length);

  const shuffle = (str) => {
    const strArray = str.split('');
    for (let i = str.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = strArray[i];
      strArray[i] = strArray[j];
      strArray[j] = temp;
    }
    return strArray.join('');
  }

  const strCombi = [];
  while (possibleCombi > 0) {
    let shuffleStr = shuffle(str);
    if (!strCombi.includes(shuffleStr)) {
      strCombi.push(shuffleStr);
      possibleCombi--;
    }  
  }

  // Check if str includes repeatings
  const checkRepeat = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) return false;
    }
    return true;
  }
  
  let count = 0;
  strCombi.forEach(str => {
    if (checkRepeat(str)) count++; 
  });
  return count;
}
