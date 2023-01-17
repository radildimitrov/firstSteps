function movieProfit(input) {
  let nameOfMovie = input[0];
  let numberOfDays = Number(input[1]);
  let numberOfTickets = Number(input[2]);
  let pricePerTicket = Number(input[3]);
  let percentageTowardsCinema = Number(input[4]);
  //"The profit from the movie {име на филм} is {приход на студиото} lv."
  //Цената на прихода да бъде форматирана до втората цифра след десетичния знак.

  let sum = 0;
  let sumOfTickets = 0;
  let sumOfMovie = 0;
  let TowardsCinema = 0;
  sumOfTickets = numberOfTickets * pricePerTicket;
  sumOfMovie = sumOfTickets * numberOfDays;
  TowardsCinema = percentageTowardsCinema * 0.01 * sumOfMovie;
  sum = sumOfMovie - TowardsCinema;

  console.log(`The profit from the movie ${nameOfMovie} is ${sum.toFixed(2)} lv.`);
}
movieProfit(["The Programmer", "40", "34785", "10.45", "14"]);
