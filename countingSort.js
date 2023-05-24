function countingSort(array) {
	console.debug('Input array: ', array);

	// Find the maximum element to know the range of counts
	let max = Math.max(...array);
	let min = Math.min(...array);
	let range = max - min + 1;
	console.debug('Max value: ', max, ' Min value: ', min);

	// Initialize the count array with all zeros
	let countArray = new Array(range).fill(0);
	let outputArray = new Array(array.length).fill(0);
	console.debug('Initialized count array: ', countArray);
	console.debug('Initialized output array: ', outputArray);

	// Insert counts of each instance of number from input array at corresponding
	// index in count array
	array.forEach(num => {
		countArray[num - min]++;
	});
	console.debug('countArray (0-indexed counts): ', countArray);

	// Modify count array such that each element at each index stores the sum of
	// previous counts
	for (let i = 1; i < countArray.length; i++) {
		countArray[i] += countArray[i - 1];
	}
	console.debug('Cumulative countArray: ', countArray);

	// Find the index of each element of the original array in count array, and
	// place the elements in output array
	for (let i = array.length - 1; i >= 0; i--) {
		const countIndex = array[i] - min;

    // Set the value of outputArray at the index of countArray[countIndex] - 1
    // to the value of array[i] because the countArray[countIndex] - 1 is the
    // index of array[i] in the outputArray
		outputArray[countArray[countIndex] - 1] = array[i];

    countArray[countIndex]--;
	}
	console.debug('outputArray: ', outputArray);

	return outputArray;
}

let array = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(array)); // Output: [1, 2, 2, 3, 3, 4, 8]
