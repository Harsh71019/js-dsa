// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely
//comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and
//returns this "outlier" N.
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlierImproved(integers) {
  console.time('Improved Approach');
  const isEven = (num) => num % 2 === 0;

  const sample = integers.slice(0, 3);
  const majorityEven = sample.filter(isEven).length >= 2;

  for (let num of integers) {
    if (isEven(num) !== majorityEven) {
      console.timeEnd('Improved Approach');
      return num;
    }
  }
  console.timeEnd('Improved Approach');
}

// Example usage for large array:
console.log(findOutlierImproved(largeArray)); // Outputs: 2
