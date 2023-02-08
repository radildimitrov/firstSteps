function solve(input) {
  let quantityGroup = Number(input[0]);
  let group1 = 0;
  let group2 = 0;
  let group3 = 0;
  let group4 = 0;
  let group5 = 0;
  for (i = 1; i <= input.length; i++) {
    let quantityPeople = Number(input[i]);
    if (quantityPeople <= 5) {
      group1 += quantityPeople;
    } else if (quantityPeople <= 12) {
      group2 += quantityPeople;
    } else if (quantityPeople <= 25) {
      group3 += quantityPeople;
    } else if (quantityPeople <= 40) {
      group4 += quantityPeople;
    } else if (quantityPeople >= 41) {
      group5 += quantityPeople;
    }
  }
  let totalGroup = group1 + group2 + group3 + group4 + group5;
  let percent1 = (group1 / totalGroup) * 100;
  let percent2 = (group2 / totalGroup) * 100;
  let percent3 = (group3 / totalGroup) * 100;
  let percent4 = (group4 / totalGroup) * 100;
  let percent5 = (group5 / totalGroup) * 100;

  console.log(`${percent1.toFixed(2)}%`);
  console.log(`${percent2.toFixed(2)}%`);
  console.log(`${percent3.toFixed(2)}%`);
  console.log(`${percent4.toFixed(2)}%`);
  console.log(`${percent5.toFixed(2)}%`);
}
