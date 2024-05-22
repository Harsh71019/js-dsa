let ana1 = 'hydroxydesoxycorticosterone';
let ana2 = 'hydroxydeoxycorticosterones';

function anagram1(str1, str2) {
  var start = performance.now();

  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter = {};
  let freqCounter2 = {};

  let arr1 = str1.split('');
  let arr2 = str2.split('');

  for (let i = 0; i < arr1.length; i++) {
    freqCounter[arr1[i]] = (freqCounter[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    freqCounter2[arr2[i]] = (freqCounter2[arr2[i]] || 0) + 1;
  }

  for (let key in freqCounter) {
    if (!(key in freqCounter2)) {
      return false;
    }

    if (freqCounter2[key] !== freqCounter[key]) {
      return false;
    }
  }
  var duration = performance.now() - start;
  console.log(`Duration First: ${duration.toFixed(2)} ms`); // 0.02 ms
  return true;
}

console.log(anagram1(ana1, ana2));

// Method better in space complexity
function anagram(str1, str2) {
  var start = performance.now();

  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split('');
  let arr2 = str2.split('');

  let tempObj = {};

  for (let i = 0; i < arr1.length; i++) {
    tempObj[arr1[i]] = (tempObj[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    let letter = arr2[i];

    if (!(letter in tempObj)) {
      return false;
    } else {
      tempObj[letter] -= 1;
    }
  }
  var duration = performance.now() - start;
  console.log(`Duration Second: ${duration.toFixed(2)} ms`); //0.07 ms
  return true;
}

console.log(anagram(ana1, ana2));

//results
// Duration First: 0.07 ms
// true
// Duration Second: 0.02 ms
// true
