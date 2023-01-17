function skiTrip(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let feedback = input[2];

  let nights = days - 1;
  let finalSum = 0;

  switch (roomType) {
    case "room for one person":
      finalSum = nights * 18;
      break;
    case "apartment":
      finalSum = nights * 25;
      if (nights < 10) {
        finalSum = finalSum * 0.7;
      } else if (nights <= 15) {
        finalSum = finalSum * 0.65;
      } else if (nights > 15) {
        finalSum = finalSum * 0.5;
      }
      break;
    case "president apartment":
      finalSum = nights * 35;
      if (nights < 10) {
        finalSum = finalSum * 0.9;
      } else if (nights <= 15) {
        finalSum = finalSum * 0.85;
      } else if (nights > 15) {
        finalSum = finalSum * 0.8;
      }
      break;
  }
  if (feedback === "positive") {
    finalSum = finalSum * 1.25;
  } else {
    finalSum = finalSum * 0.9;
  }
  console.log(finalSum.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
