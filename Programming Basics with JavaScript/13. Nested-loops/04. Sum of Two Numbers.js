function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let flag = false;
  let counter = 0;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      let sum = i + j;
      counter++;
      if (sum == magicNumber) {
        flag = true;
        console.log(`Combination N:${counter} (${i} + ${j} = ${sum})`);
        break;
      }
    }
    if (flag == true) {
      break;
    }
  }
  if (flag == false) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["88", "888", "2000"]);
