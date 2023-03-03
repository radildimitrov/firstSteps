function condenseArrayToNumbers(arr) {
  let currArr = arr;
  while (currArr.length > 1) {
    let newArr = [];
    for (let i = 0; i < currArr.length - 1; i++) {
      const firstElement = currArr[i];
      const secondElement = currArr[i + 1];

      newArr.push(firstElement + secondElement);
    }
    currArr = newArr;
  }
  console.log(currArr[0]);
}
condenseArrayToNumbers([2, 10, 3]);
