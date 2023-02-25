function pyramid(base, increment) {
  let row = 0;
  let firstStoneBase = base - 2;
  let stoneBase = 0;
  let currentStone = 0;
  let stone = 0;
  let firstMarbleBase = base;
  let marbleBase = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let pyramidHeight = 0;
  for (let i = firstStoneBase; i >= 1; i -= 2) {
    stoneBase = i;
    currentStone = Math.pow(stoneBase, 2) * increment;
    stone += currentStone;
  }
  for (let i = firstMarbleBase; i >= 1; i -= 2) {
    row++;
    marbleBase = i;
    currentMarble = (marbleBase * 4 - 4) * increment;
    marble += currentMarble;
    if ((row % 5 === 0 && marbleBase != 1 && marbleBase != 2)) {
      marble = marble - currentMarble;
      lapisLazuli += currentMarble;
    } else if (marbleBase === 2) {
      marble = marble - Math.pow(2, 2) * increment;
      gold = Math.pow(2, 2) * increment;
    } else if (marbleBase === 1) {
      gold = 1 * increment;
    }
    pyramidHeight = row * increment;
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}