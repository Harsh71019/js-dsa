let arrayUnique = [1, 1, 1, 1, 2, 3, 4, 5, 6];

function uniqueValues(arr) {
  if (arr.lenght === 0) {
    return 0;
  }

  let i = 0;

  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(uniqueValues(arrayUnique));
