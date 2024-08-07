/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    let char1 = s[i];
    let char2 = t[i];

    if (!obj1[char1] && !obj2[char2]) {
      obj1[char1] = char2;
      obj2[char2] = char1;
    } else {
      if (obj1[char1] !== char2 && obj2[char2] !== char1) {
        return false;
      }
    }
  }
  return true;
};

console.log(isIsomorphic('aed', 'egg'));
