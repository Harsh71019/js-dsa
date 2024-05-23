const normalArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const squareArray = [1, 4, 9, 16, 25, 1, 4, 9, 16, 25];

function checkSquares(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
  }

  for (let key in obj1) {
    // Check if key squared exists in obj2
    if (!(key ** 2 in obj2)) {
      return false;
    }
    // check if the frequecy is same in both of the obj
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkSquares(normalArray, squareArray));
