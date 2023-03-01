function spiceMustFlow(startingYield) {
  let spice = startingYield;
  let days = 0;
  let spicePerDay = 0;
  let totalSpice = 0;
  while (startingYield >= 100) {
    days++;
    spicePerDay = spice - 26;
    totalSpice = totalSpice + spicePerDay;
    startingYield = startingYield - 10;
    spice = startingYield;
    if (startingYield < 100) {
      totalSpice -= 26;
    }
  }
  console.log(days);
  console.log(totalSpice);
}
spiceMustFlow(111);