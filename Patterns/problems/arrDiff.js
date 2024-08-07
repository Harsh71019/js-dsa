function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }

  if (b.length === 0) {
    return a;
  }

  // Use a Set for b to achieve O(1) look-up time
  const bSet = new Set(b);

  // Filter out elements from a that are present in bSet
  return a.filter((element) => !bSet.has(element));
}

// Example usage:
const a = [1, 2, 2, 2, 3, 4, 5];
const b = [2, 4];
console.log(arrayDiff(a, b)); // Output: [1, 3, 5]
