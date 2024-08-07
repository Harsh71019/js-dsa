function findUniq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let num in obj) {
    if (obj[num] === 1) {
      return Number(num);
    }
  }
}
