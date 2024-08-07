let number = 10;

function fibonacci(n) {
  let a = 0,
    b = 1,
    c,
    i;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

console.log(fibonacci(number));
