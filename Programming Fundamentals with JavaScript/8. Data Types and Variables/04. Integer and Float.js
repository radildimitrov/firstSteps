function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let type = "Float";
  if (Number.isInteger(sum)) {
    type = "Integer";
  }
  console.log(`${sum} - ${type}`);
}
integerAndFloat(10, 15, 10.2)
