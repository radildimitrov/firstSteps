function deerOfSanta(input) {
  let numberOfDaysSantaWillBeAbsent = Number(input[0]);
  let foodLeftInKilograms = Number(input[1]);
  let foodPerDayForFirstDeer = Number(input[2]);
  let foodPerDayForSecondDeer = Number(input[3]);
  let foodPerDayForThirdDeer = Number(input[4]);

  let firstDeer = numberOfDaysSantaWillBeAbsent * foodPerDayForFirstDeer;
  let secondDeer = numberOfDaysSantaWillBeAbsent * foodPerDayForSecondDeer;
  let thirdDeer = numberOfDaysSantaWillBeAbsent * foodPerDayForThirdDeer;

  let totalFoodRequired = firstDeer + secondDeer + thirdDeer;

  if (totalFoodRequired <= foodLeftInKilograms) {
    console.log(
      `${Math.floor(
        foodLeftInKilograms - totalFoodRequired
      )} kilos of food left.`
    );
  } else {
    console.log(
      `${Math.ceil(
        totalFoodRequired - foodLeftInKilograms
      )} more kilos of food are needed.`
    );
  }
}
deerOfSanta(["5", "10", "2.1", "0.8", "11"]);
