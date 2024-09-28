const numbers = [1, 3, 5, 7, 9, 2];
let total = 11;

function twoSum(num, s) {
  let numsMap = {};

  for (let i = 0; i < num.length; i++) {
    let currentValue = numsMap[num[i]];
    if (currentValue >= 0) {
      return [currentValue, i];
    } else {
      const numberToFind = s - num[i];
      numsMap[numberToFind] = i;
    }
  }
  return null;
}

console.log(twoSum(numbers, total));
