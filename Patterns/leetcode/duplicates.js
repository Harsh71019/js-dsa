let arrayOfNums = [1, 2, 3, 4, 5];

var containsDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];
    if (map[currentElement]) {
      return true;
    } else {
      map[currentElement] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate(arrayOfNums));

// Most simple solution
function containsDupli(nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
}
