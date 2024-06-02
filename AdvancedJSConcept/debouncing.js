function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function throttle(callback, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setInterval(() => {
      callback(...args);
    }, delay);
  };
}
