function nonDecreasingSubset(arr) {
  let newArr = [];
  let length = Number(arr.length);

  let firstNumber = arr.shift();
  newArr.push(firstNumber);

  for (let i = 0; i < length; i++) {
    let a = arr.shift();
    let b = newArr[newArr.length - 1];
    if (a >= b) {
      newArr.push(a);
    }
  }
  console.log(newArr.join(" "));
}

nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
