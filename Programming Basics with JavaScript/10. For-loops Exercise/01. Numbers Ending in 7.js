function numbersEndingInSeven() {
  for (let index = 7; index <= 997; index++) {
    if (index % 10 === 7) {
      console.log(index);
    }
  }
}
numbersEndingInSeven();
