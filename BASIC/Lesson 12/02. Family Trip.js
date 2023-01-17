function familyTrip(input) {
  let budget = Number(input[0]);
  let nights = Number(input[1]);
  let price = Number(input[2]);
  let extraCostsPercentage = Number(input[3]);

  //Ако сумата е достатъчна:
  //o "Ivanovi will be left with {останали пари след почивката} leva after vacation."
  //· Ако НЕ е достигната сумата:
  //o "{парите нужни до достигане на целта} leva needed."
  //ума трябва да се форматира до втората цифра след десетичния знак.

  if (nights > 7) {
    let discount = price * (5 / 100);
    price = price - discount;
  }
  let totalStayCost = price * nights;
  let totalExtraCosts = budget * (extraCostsPercentage / 100);
  let total = totalStayCost + totalExtraCosts;
  let leftover = budget - total;
  if (total <= budget) {
    console.log(
      `Ivanovi will be left with ${leftover.toFixed(2)} leva after vacation.`
    );
  } else {
    let moneyNeeded = total - budget;
    console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
  }
}
familyTrip(["700.50", "8", "100", "2"]);
