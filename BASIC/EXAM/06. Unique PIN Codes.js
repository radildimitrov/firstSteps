function uniquePinCodes(input) {
  let firstDigit = Number(input[0]);
  let secondDigit = Number(input[1]);
  let thirdDigit = Number(input[2]);

  for (let oneDigit = 1; oneDigit <= firstDigit; oneDigit++) {
    for (let twoDigit = 1; twoDigit <= secondDigit; twoDigit++) {
      for (let threeDigit = 1; threeDigit <= thirdDigit; threeDigit++) {
        if (
          oneDigit % 2 == 0 &&
          threeDigit % 2 == 0 &&
          (twoDigit == 2 || twoDigit == 3 || twoDigit == 5 || twoDigit == 7)
        ) {
          console.log(`${oneDigit} ${twoDigit} ${threeDigit}`);
        }
      }
    }
  }
}
uniquePinCodes(["8", "2", "8"]);
