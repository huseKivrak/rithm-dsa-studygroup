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
 *     - Call `merge` helper func. to regroup subarrays in ascending order.
 *
 *  =========================================
 *
 *  Step-by-step calls:
 *    - See console logs.
 *
 *  Time complexity: O(n log n) - quasilinear time
 *    - O(n log n) for any number of elemnts.
 *    - Efficient for large lists.
 *
 *  Space complexity: O(n)
 *    - Doesn't sort in place.
 *    - Creates new arrays and merges them.
 *    - Inefficient: requires additional space.
 *
 */

function mergeSort(arr) {

  // base case: subarray countains one element
  if (arr.length <= 1) {
    return arr;
  }

  // 1. DIVIDE: split array in half
  const midIdx = Math.ceil(arr.length / 2);
  const leftHalf = arr.slice(0, midIdx);
  const rightHalf = arr.slice(midIdx);

  // 2. CONQUER: recursively halve left and right subarrays
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // 3. MERGE: merge sorted subarrays in asc. order
  return merge(sortedLeft, sortedRight);
}

/** merge(sortedLeft, sortedRight) -------------------------------
 *
 *  Helper func. for merging two sorted subarrays.
 *  Returns a single sorted array.
 *
 *  Input: [3, 5, 7, 8] [1, 2, 4, 6]
 *  Output: [1, 2, 3, 4, 5, 6, 7, 8]
 *
 */

function merge(sortedLeft, sortedRight) {

  let mergedArr = [];

  // multiple pointers iterate over left and right subarrays
  let leftIndex = 0;
  let rightIndex = 0;

  // compare elements from left and right subarrays and push smaller num
  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      mergedArr.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  // add any remaining elememts from left subarray
  while (leftIndex < sortedLeft.length) {
    mergedArr.push(sortedLeft[leftIndex]);
    leftIndex++;
  }

  // add any remaining elements from right subarray
  while (rightIndex < sortedRight.length) {
    mergedArr.push(sortedRight[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}

module.exports = mergeSort;