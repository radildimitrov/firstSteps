/*

*/

function toyShop(input){
    let price = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
    
    let toyCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let money = puzzleCount * 2.60 + dollCount * 3.00 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2.00;

    if (toyCount >= 50){
        money = money - money * 0.25;
    }
    money = money - money * 0.10;

    if (money >= price){
        let diff = money - price;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }   else{
        let diff = price - money;
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8","20","25","30","50","10"]);