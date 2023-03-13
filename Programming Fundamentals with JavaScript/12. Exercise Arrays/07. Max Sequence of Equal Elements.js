function findLongestSequence(arr) {
  function joinWithInterval(arr) {
    return arr.join(" ");
  }

  let currentCount = 1,
    maxCount = 1,
    maxElement = arr[0];
  let longestSequence = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxElement = arr[i - 1];
      }
      currentCount = 1;
    }
  }

  if (currentCount > maxCount) {
    maxElement = arr[arr.length - 1];
  }

  for (let i = 0; i < maxCount; i++) {
    longestSequence.push(maxElement);
  }
  return joinWithInterval(longestSequence);
}
console.log(findLongestSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
