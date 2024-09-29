const mostWaterArray = [4, 8, 1, 2, 3, 9];

function mostContainer(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

console.log(mostContainer(mostWaterArray));
