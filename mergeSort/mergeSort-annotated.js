"use strict";

/** mergeSort(arr) -----------------------------------------
 *
 *  A recursive, stable, and efficient sorting algorithm.
 *  Follows the "divide and conquer" strategy in 3 steps:
 *
 *  =========================================
 *
 *  1. Divide
 *     - Split array into two subarrays.
 *
 *  2. Conquer
 *     - Split left and right subarrays recursively.
 *     - Base case: array is split into its individual elements.
 *
 *  3. Merge
 *     - Call `merge` helper func to regroup elements in ascending order.
 *
 *  =========================================
 *
 *  Step-by-step calls:
 *    - See console logs.
 *
 *  Time complexity: O(n log n) - quasilinear time
 *    - Efficient for lists of any length.
 *    - O(n log n) for any number of elemnts.
 *    - Stable: preserves order of elements.
 *
 *  Space complexity: O(n)
 *    - Inefficient: requires additional space.
 *    - Doesn't sort in place.
 *    - Creates new arrays and merges them.
 *
 */

function mergeSort(arr) {
  console.debug("**mergeSort([" + arr + "])**");

  // BASE CASE: SUBARRAY CONTAINS ONE ELEMENT
  if (arr.length <= 1) {
    console.log("(basecase hit) return -> ", arr);
    return arr;
  }

  // 1. FIND MIDDLE INDEX OF ARRAY
  // - when splitting an array with an odd number of elements,
  // - it's conventional to round the middle index up
  // - so that the left subarray is bigger than right subarray
  // - this could as easily be rounded down with `Math.floor`
  // - so that the right half is bigger
  // - the result is the same
  const midIdx = Math.ceil(arr.length / 2);
  console.log("midIdx=", midIdx);

  // 1. DIVIDE: SPLIT ARRAY IN HALF
  const leftHalf = arr.slice(0, midIdx);
  console.log("leftHalf=", leftHalf);
  const rightHalf = arr.slice(midIdx);
  console.log("rightHalf=", rightHalf);

  // 2. CONQUER: RECURSIVELY HALVE LEFT AND RIGHT SUBARRAYS
  // - split into arrays of single elements
  // - recursively splits then merges branches from left to right
  const sortedLeft = mergeSort(leftHalf);
  console.log(`sortedLeft=${sortedLeft} ✔️`);
  const sortedRight = mergeSort(rightHalf);
  console.log(`sortedRight=${sortedRight} ✔️✔️`);

  // 3. MERGE: MERGE SORTED SUBARRAYS IN ASC. ORDER
  return merge(sortedLeft, sortedRight);
}


/** merge(sortedLeft, sortedRight) -------------------------------
 *
 *  Helper func. merges two sorted subarrays.
 *  Returns a single sorted array.
 *
 *  Input: [3, 5, 7, 8] [1, 2, 4, 6]
 *  Output: [1, 2, 3, 4, 5, 6, 7, 8]
 *
 */

function merge(sortedLeft, sortedRight) {
console.debug(`**merge([${sortedLeft}],[${sortedRight}])**`);

  let mergedArr = [];

  // MULTIPLE POINTERS ITERATE OVER LEFT AND RIGHT SUBARRAYS
  let leftIndex = 0;
  console.log(" - leftIndex=", leftIndex)
  let rightIndex = 0;
  console.log(" - rightIndex=", rightIndex)

  // COMPARE ELEMENTS FROM LEFT AND RIGHT SUBARRAYS AND PUSH SMALLER NUM
  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    console.log(` - comparing ${sortedLeft[leftIndex]}, ${sortedRight[rightIndex]}`);
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      mergedArr.push(sortedLeft[leftIndex]);
      console.log(` - mergedArr.push[${sortedLeft[leftIndex]}]`);
      leftIndex++;
      console.log(" - leftIndex=", leftIndex);
    } else {
      mergedArr.push(sortedRight[rightIndex]);
      console.log(` - mergedArr.push[${sortedRight[rightIndex]}]`);
      rightIndex++;
      console.log(" - rightIndex=", rightIndex);
    }
  }

  // ADD ANY REMAINING ELEMENTS FROM LEFT ARRAY
  while (leftIndex < sortedLeft.length) {
    console.log(" - left remaining - while (leftIndex < sortedLeft.length)");
    mergedArr.push(sortedLeft[leftIndex]);
    console.log(` - mergedArr.push[${sortedLeft[leftIndex]}]`);
    leftIndex++;
    console.log(" - leftIndex=", leftIndex);
  }

  // ADD ANY REMAINING ELEMENTS FROM RIGHT ARRAY
  while (rightIndex < sortedRight.length) {
    console.log(" - right remaining - while (rightIndex < sortedRight.length)");
    mergedArr.push(sortedRight[rightIndex]);
    console.log(` - mergedArr.push[${sortedRight[rightIndex]}]`);
    rightIndex++;
    console.log(" - rightIndex=", rightIndex);
  }

  console.debug(`**return mergedArr=[${mergedArr}]**`);
  return mergedArr;
}

const array = [3, 7, 8, 5, 4, 2, 6, 1];
const finalResult = mergeSort(array);
console.debug("finalResult=", finalResult);