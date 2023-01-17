function touristShop(input) {
  let budget = Number(input[0]);
  let index = 1;
  let productsBoughtCounter = 0;
  let totalSpend = 0;

  while (input[index] != "Stop") {
    let productName = input[index];
    index++;
    let productPrice = Number(input[index]);
    index++;

    if ((productsBoughtCounter + 1) % 3 === 0) {
      productPrice = productPrice / 2;
    }

    if (productPrice <= budget) {
      productsBoughtCounter++;
      budget -= productPrice;
      totalSpend += productPrice;
    } else {
      budget -= productPrice;
      break;
    }
  }
  if (budget >= 0) {
    console.log(
      `You bought ${productsBoughtCounter} products for ${totalSpend.toFixed(
        2
      )} leva.`
    );
  } else {
    console.log(`You don't have enough money!`);
    console.log(`You need ${(budget * -1).toFixed(2)} leva!`);
  }
}
touristShop([
"54",
"Thermal underwear",
"24",
"Sunscreen",
"45"
]);

//· При получаване на командата "Stop", на един ред:

//o "You bought {брой на закупените продукти} products for {цена на покупките} leva."

//· При заявка за покупка на продукт, чиято цена е по-висока от останалите пари, на два реда:

//o "You don't have enough money!"

//o "You need {недостигащи пари} leva!
