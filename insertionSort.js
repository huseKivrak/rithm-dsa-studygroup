/** insertion sort
 *
 * intro:
 * simple sorting algorithm that builds sorted array one item at a time
 *  - in place, stable
 *
 * time complexity: O(n^2) (avoid for large, random arrays)
 * space complexity: O(1)
 *
 * known as an "online algorithm": can process new input in the order
 *  it was fed to the algo, without having entire input available from the start
 *    - ex/ client submits data live, sorted at a moment's notice
 *  - vs. selection sort, an offline algo
 *
 *
 * steps:
 * 1. iterate from arr[1] to arr[n] over the array
 * 2. compare the current element (key) to its predecessor
 * 3. if the key element is smaller than its predecessor,
 *    compare it to the elements before.
 *    Move the greater elements one position up to make space for the swapped element.
 * 4. repeat step 3 until the key element is greater than its predecessor
 * 5. repeat steps 2 and 3 until the array is sorted
 *
 * use cases:
 * - small arrays
 * - almost sorted arrays of any size
 * - sorting data in real-time
 *
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i] //currentValue
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = key
  }

  return arr
}




