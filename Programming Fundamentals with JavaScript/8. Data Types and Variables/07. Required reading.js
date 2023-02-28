function requiredReading(numberOfPages, pagesReadPerHour, numberOfDays) {
  let numberOfHours = 0;
  let totalTime = numberOfPages / pagesReadPerHour;
  numberOfHours = totalTime / numberOfDays;
  console.log(numberOfHours);
}
requiredReading(212, 20, 2);
