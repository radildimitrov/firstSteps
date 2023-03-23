function magicMatrices(input) {
  let isMagic = false;

  let rowOne = input[0];
  let rowTwo = input[1];
  let rowThree = input[2];

  let sumOne = 0;
  let sumTwo = 0;
  let sumThree = 0;
  let sumFour = 0;
  let sumFive = 0;
  let sumSix = 0;

  sumOne = rowOne[0] + rowOne[1] + rowOne[2];
  sumTwo = rowTwo[0] + rowTwo[1] + rowTwo[2];
  sumThree = rowThree[0] + rowThree[1] + rowThree[2];
  sumFour = rowOne[0] + rowTwo[0] + rowThree[0];
  sumFive = rowOne[1] + rowTwo[1] + rowThree[1];
  sumSix = rowOne[2] + rowTwo[2] + rowThree[2];

  if (
    sumOne == sumTwo &&
    sumOne == sumThree &&
    sumOne == sumFour &&
    sumOne == sumFive &&
    sumOne == sumSix
  ) {
    isMagic = true;
  }
  console.log(isMagic);
}
magicMatrices([
  [4, 5, 6],

  [6, 5, 4],

  [5, 5, 5],
]);
