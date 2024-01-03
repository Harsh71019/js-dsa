const cycleArray = [3, 4, 5, 6, 7];

// function cycle(arr, k) {
//   let result = new Array(arr.length);

//   for (let i = 0; i < result.length; i++) {
//     result[(i + k) % arr.length] = arr[i];
//   }

//   return result;
// }

// console.log(cycle(cycleArray, 3));

function cycle(arr, k) {
  let result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
  }
  return result;
}

console.log(cycle(cycleArray, 1));
