const numbers = [99, 44, 5, 6, 12, 4, 3424, 3211, 121];

function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort(numbers));
