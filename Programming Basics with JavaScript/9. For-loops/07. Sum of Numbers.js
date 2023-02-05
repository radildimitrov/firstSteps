function sumOfNumbers(input) {
  let example = input[0];
  let totalValue = 0;
  for (let index = 0; index < example.length; index++) {
    let currentDigit = Number(example.charAt(index));
    totalValue += currentDigit;
  }
  console.log(`The sum of the digits is:${totalValue}`);
}
sumOfNumbers(["1234"]);
