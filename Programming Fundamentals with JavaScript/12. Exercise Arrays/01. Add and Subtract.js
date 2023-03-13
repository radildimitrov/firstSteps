function addAndSubtract(arr) {
  let oldSum = 0;
  let newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    oldSum += currentNumber;
    if (currentNumber % 2 === 0) {
      currentNumber += i;
      arr[i] = currentNumber;
    } else {
      currentNumber -= i;
      arr[i] = currentNumber;
    }
    newSum += currentNumber;
  }
  console.log(arr);
  console.log(oldSum);
  console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
console.log("------------------------------");
addAndSubtract([-5, 11, 3, 0, 2]);
