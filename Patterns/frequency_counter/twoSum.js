const numbers = [1, 3, 5, 7, 9, 2];
let total = 11;

function twoSum(nums, s) {
  let numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    let currentValue = numsMap[nums[i]];

    if (currentValue >= 0) {
      return [currentValue, i];
    } else {
      let numberToFind = total - nums[i];
      numsMap[numberToFind] = i;
    }
  }
  return null;
}

console.log(twoSum(numbers, total));

function twoSumBrute(nums, s) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === s) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSumBrute(numbers, total));
