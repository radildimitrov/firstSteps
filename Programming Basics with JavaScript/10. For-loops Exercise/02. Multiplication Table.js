function multiplicationTable(input) {
  let multiplier = Number(input[0]);
  let result = 0;
  for (let index = 1; index <= 10; index++) {
    result = index * multiplier;
    console.log(`${index} * ${multiplier} = ${result}`);
  }
}
multiplicationTable(["10"]);
