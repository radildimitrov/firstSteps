function numbersDivisibleBy9(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let sum = 0;
  let numbers = "";
  for (let index = start; index <= end; index++) {
    if (index % 9 == 0) {
      sum += index;
      numbers += index;
      if (index + 9 <= end){
      numbers += " " + '\n'
      }
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(numbers);
}
numbersDivisibleBy9(["100", "209"]);