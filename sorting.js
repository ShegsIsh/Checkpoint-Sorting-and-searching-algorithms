function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      let current = arr[i]; // Element to be inserted
      let j = i - 1; // Start from the previous element
      
      // Move elements of arr[0..i-1], that are greater than current,
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j]; // Move the element one position ahead
          j--; // Move to the previous element
      }
      
      arr[j + 1] = current; // Insert current element into the sorted sequence
  }
  
  return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log("Original Array:", arr);
console.log("Sorted Array:", insertionSort(arr));
