function cleverLily(input) {
  let lilisAge = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let singleToyPrice = Number(input[2]);

  let toysCounter = 0;
  let savedMoeny = 0;
  let stolenMoney = 0;
  let addMoney = 10;

  for (let currentAge = 1; currentAge <= lilisAge; currentAge++){
    if (currentAge % 2 === 0){
      savedMoeny += addMoney;
      addMoney += 10;
      stolenMoney++;
    } else {
      toysCounter++;
    }
  }
  let totalmoneyfromtoys = singleToyPrice * toysCounter;
  let totalsavedmoney = totalmoneyfromtoys + savedMoeny - stolenMoney;

  if (totalsavedmoney >= washingMachinePrice){
    console.log(`Yes! ${(totalsavedmoney - washingMachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachinePrice - totalsavedmoney).toFixed(2)}`);
  }
}