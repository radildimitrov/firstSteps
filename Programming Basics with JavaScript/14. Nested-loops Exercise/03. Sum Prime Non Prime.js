function sumPrimeNonPrime(input) {
  let currentNumber = 0;
  let index = 0;
  let sumPrime = 0;
  let sumNonPrimer = 0;
  while (input[index] != "stop") {
    currentNumber = Number(input[index]);
    console.log(currentNumber);
    for (let j = 2; j < currentNumber; j++) {
      if (currentNumber % j == 0) {
        let sumPrime =+ currentNumber;
        break;
      } else {
        let sumNonPrimer =+ currentNumber;
      }
      
    }
    index++;  
}
  console.log(sumPrime);
  console.log(sumNonPrimer);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
