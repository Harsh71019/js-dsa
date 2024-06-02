// setTimeOut

let timeOut = setTimeout(() => {
  console.log('Do something in 1 second');
}, 1000);

// setInterval
let count = 0;
let intervalTest = setInterval(() => {
  count++;
  if (count >= 25) {
    clearInterval(intervalTest); // Stops the interval after count reaches 25
  }
  console.log('Log after 2.5 seconds', count);
}, 100);

// clear timeOut
clearTimeout(timeOut); // Clears the timeOut before 1 sec
