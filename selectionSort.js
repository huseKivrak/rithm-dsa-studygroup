/**
 * Selection Sort
 *
 * In-place sorting algo
 *
 * Divide list into two parts (left to right):
 * -sorted sublist
 * -unsorted sublist
 *
 * Compare values to value at current loop idx to find (next) lowest on each
 * pass through list
 *
 * Algo:
 * Outer loop, traverse length of array - 1
 * Use a variable to track idx of lowest val on each pass
 * Inner loop, find next lowest value, updating minIdx variable as needed
 * Swap values at i and minIdx
 *
 * No auxillary memory needed (in place sorting)
 *
 * Runtime complexity: O(n^2)
 *
 * ex.
 *
 * [4, 2, 6, 1]
 * [1, 2, 6, 4]
 * [1, 2, 6, 4]
 * [1, 2, 4, 6]
 *
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
}