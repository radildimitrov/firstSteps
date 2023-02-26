function sortAndPrint(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort(function(a, b) { return b - a; });
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }
  }
sortAndPrint(2, 1, 3);