function cake(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let cakeSize = length * width;
  let index = 2;
  let command = input[index];
  let numPieces = 0;

  while (command !== "STOP") {
    let cakeParts = Number(command);
    numPieces += cakeParts;

    if (numPieces > cakeSize) {
      console.log(
        `No more cake left! You need ${numPieces - cakeSize} pieces more.`
      );
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "STOP" && numPieces <= cakeSize) {
    console.log(`${cakeSize - numPieces} pieces are left.`);
  }
}
