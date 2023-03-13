function magicSums(array, sum) {
  for (let index = 0; index < array.length - 1; index++) {
    const currentNumber = array[index];
    for (let jndex = index + 1; jndex <= array.length - 1; jndex++) {
      const nextNumber = array[jndex];
      if (currentNumber + nextNumber == sum) {
        console.log(`${currentNumber} ${nextNumber}`);
      }
    }
  }
}
magicSums(
  [14, 20, 60, 13, 7, 19, 8],

  27
);
