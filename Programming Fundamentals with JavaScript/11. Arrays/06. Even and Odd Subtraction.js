function evenAndOddSubtraction(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  let evenSum = 0;
  let oddSum = 0;
  for (let num of array) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  console.log(evenSum - oddSum);
}
evenAndOddSubtraction([3, 5, 7, 9]);
