let dummy = [1, 2, 3, 4, 5];
let obj = {
  name: 'harsh',
  surname: 'patel',
};

for (let key in obj) {
  console.log(obj[key]);
}

for (let value of dummy) {
  console.log(value);
}

let x = 0;
while (x < dummy.length) {
  console.log(dummy[x]);
  x++;
}

for (let i = 0; i < dummy.length; i++) {
  for (let j = i + 1; j < dummy.length; j++) {
    console.log(dummy[i], dummy[j]);
  }
}
