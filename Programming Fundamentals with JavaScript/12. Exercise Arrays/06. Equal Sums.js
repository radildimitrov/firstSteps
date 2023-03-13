function equalSums(array) {
  let numbers = array;

  for (let index = 0; index <= numbers.length - 1; index++) {
    let currentElement = numbers[index];
    let isTrue = false;
    let leftSum = 0;
    let rightSum = 0;
    for (let leftIndex = 0; leftIndex < index; leftIndex++) {
      leftSum += numbers[leftIndex];
    }
    for (
      let rightIndex = index + 1;
      rightIndex <= numbers.length - 1;
      rightIndex++
    ) {
      rightSum += numbers[rightIndex];
    }
    if (leftSum == rightSum) {
      isTrue = true;
      console.log(index);
      return;
    }
  }
  console.log("no");
}
equalSums([1, 2]);
