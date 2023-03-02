function primeNumberChecker(singleNumber) {
  let isPrime = true;

  if (singleNumber === 1) {
    console.log("false");
  } else if (singleNumber > 1) {
    for (let i = 2; i < singleNumber; i++) {
      if (singleNumber % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  } else {
    console.log("The number is not a prime number.");
  }
}
primeNumberChecker(7);
