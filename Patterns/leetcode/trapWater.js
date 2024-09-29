let mostTrapped = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

function mostTrappedWater(arr) {
  let total = 0;
  let left = 0;
  let right = arr.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left < right) {
    if (arr[left] <= arr[right]) {
      if (arr[left] >= maxLeft) {
        maxLeft = arr[left];
      } else {
        total += maxLeft - arr[left];
      }
      left++;
    } else {
      if (arr[right] >= maxRight) {
        maxRight = arr[right];
      } else {
        total += maxRight - arr[right];
      }
      right--;
    }
  }
  return total;
}

console.log(mostTrappedWater(mostTrapped));
