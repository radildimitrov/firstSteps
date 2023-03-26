function simpleCalculator(numberOne, numberTwo, operator) {
  let result = 0;
  switch (operator) {
    case "multiply":
      result = numberOne * numberTwo;
      break;
    case "divide":
      result = numberOne / numberTwo;
      break;
    case "add":
      result = numberOne + numberTwo;
      break;
    case "subtract":
      result = numberOne - numberTwo;
      break;
  }
  console.log(result);
}

simpleCalculator(
  5,

  5,

  "multiply"
);
