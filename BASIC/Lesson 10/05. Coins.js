function coins(input) {
    let change = Number(input[0]);
    let inCoins = Math.floor(change * 100);
    let coinsCounter = 0;

    while (inCoins > 0){
        if (inCoins >= 200){
            inCoins = inCoins - 200;
            coinsCounter++;
        } else if (inCoins >= 100){
            inCoins = inCoins - 100;
            coinsCounter++;
        } else if (inCoins >= 50){
            inCoins = inCoins - 50;
            coinsCounter++;
        } else if (inCoins >= 20){
            inCoins = inCoins - 20;
            coinsCounter++;
        } else if (inCoins >= 10){
            inCoins = inCoins - 10;
            coinsCounter++;
        } else if (inCoins >= 5){
            inCoins = inCoins - 5;
            coinsCounter++;
        } else if (inCoins >= 2){
            inCoins = inCoins - 2;
            coinsCounter++;
        } else if (inCoins >= 1){
            inCoins = inCoins - 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}
coins(["1.23"])