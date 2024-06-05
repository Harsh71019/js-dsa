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

function throttle(callback, delay = 500) {
  let isThrottled = false;
  let savedArgs = null;

  const executeCallback = () => {
    if (savedArgs === null) {
      isThrottled = false;
    } else {
      callback(...savedArgs);
      savedArgs === null;
      setTimeout(executeCallback, delay);
    }
  };

  return (...args) => {
    if (isThrottled) {
      savedArgs = args;
      return;
    }
    callback(...args);
    isThrottled = true;
    setTimeout(executeCallback, delay);
  };
}
