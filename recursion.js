////////////////////////////////////////////////
////////////Recursion////////////////////////
////////////////////////////////////////////////
//COMMON RECURSION CASES
// Fibonacci Sequence
// Tower of Hanoi
// Anagrams

/**
 * in a nutshell:
 *
 * basically a fancy loop that calls itself until the base case is reached
 *
 */

/**as loop: */
function sum(numArr) {
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total += numArr[i];
  }

  return total;
}

/** as recursion: */
function recursiveSum(numArr, idx = 0, total = 0) {
  //base case
  if (idx === numArr.length - 1) return total;

  //recursive case
  total += numArr[idx];
  idx++;
  recursiveSum(numArr, idx, total);
}


//palindrome
// Return true if string is a [[palindrome]] (the string is the same forward and backwards).
//The arguments entered may have puncutations and symbols, but they should not affect whether the string is a palindrome.

function palindrome(string, start = 0, end = string.length - 1) {
  //base case:
  // return false if the current first and current last index are not equal
  if (string[start] !== string[end]) return false;
  if (start === end) return true;
  console.log("start:", start, "end:", end);
  //recursive case:

  //return required here to "bubble up the call stack", exiting the func body
  return palindrome(string, ++start, --end);
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //true
// console.log(palindrome("llama mall")); //true
// console.log(palindrome("jmoney")); //false

////////////////////////////////////////////////

//percentageMissing
/*
Write a function "percentMissing" to return the percentage of times a letter character is missing in a phrase. A missing character is
shown with an underscore "_". Examples:
percentMissing("Co_i_ng i_ f_n") should return 28.5
percentageMissing("J___s_ript") should return 40 or 40.0

Note: Do not use any native JS methods, or loops.
*/

function percentageMissing(string, idx = 0, count = 0) {
  //percentage missing = _ count / total letters (string.length)
  //count for total _s

  //base case:
  if (idx === string.length) return Math.round((count / string.length) * 100);

  if (string[idx] === "_") count++;

  //recursive case:
  return percentageMissing(string, ++idx, count);
}

////////////////////////////////////////////////

//countAbc
//Count recursively the total number of "abc" and "aba" substrings that appear in the given string. Do not use any loops or native JS methods.

// console.log(countAbc("abc")) //1
// console.log(countAbc("abcxxabc")) //2
// console.log(countAbc("abaxxaba")) //2

////////////////////////////////////////////////

//getLastCharacter
/* Write a function "getLastCharacter" that returns the last character of a string.
Accomplish this without using any loops, native JS methods, or the length property.
*/

////////////////////////////////////////////////

//flattenRecursively
// Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

////////////////////////////////////////////////

// anagrams
/*
Write a function ‘anagrams’ that produces all possible anagrams of a string and outputs them as an array.
*/

// console.log(anagrams(‘aabc’));  //[ ‘aabc, ‘aacb’, ‘abac’, ‘abca’, ‘acab’, ‘acba’, ‘baac’, ‘baca’, ‘bcaa’, ‘caab’, ‘caba’, ‘cbaa’ ]
