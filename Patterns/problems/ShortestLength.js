// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let short = Infinity;
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < short) {
      short = arr[i].length;
    }
  }
  return short;
}
