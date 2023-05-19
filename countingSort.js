function countingSort(array) {
  console.log("Input array: ", array);

  // Find the maximum element to know the range of counts
  let max = Math.max(...array);
  let min = Math.min(...array);
  let range = max - min + 1;
  console.log("Max value: ", max, " Min value: ", min);

  // Initialize the count array with all zeros
  let countArray = new Array(range).fill(0);
  let outputArray = new Array(array.length).fill(0);
  console.log("Initialized count array: ", countArray);
  console.log("Initialized output array: ", outputArray);

  // Count the occurrence of each number in the array
  array.forEach((num) => {
      console.log('num', num);
      console.log('min', min);
      console.log('num - min', num - min);
      console.log(`BEFORE: countArray[${num - min}]`, countArray[num - min]);
      countArray[num - min]++;
      console.log(`AFTER: countArray[${num - min}]`, countArray[num - min]);
  });
  console.log("Count array after counting occurrence of each number: ", countArray);

  // Modify the count array by adding the previous counts
  for(let i = 1; i < countArray.length; i++) {
      countArray[i] += countArray[i - 1];
  }
  console.log("Count array after adding previous counts: ", countArray);

  // Fill the output array
  for(let i = array.length - 1; i >= 0; i--) {
      outputArray[countArray[array[i] - min] - 1] = array[i];
      countArray[array[i] - min]--;
  }
  console.log("Output array after filling in sorted order: ", outputArray);

  return outputArray;
}

let array = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(array));  // Output: [1, 2, 2, 3, 3, 4, 8]
