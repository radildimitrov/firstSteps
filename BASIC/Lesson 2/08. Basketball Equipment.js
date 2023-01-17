// Напишете програма, която изчислява какви разходи ще има Джеси, ако започне да тренира, 
// като знаете колко е таксата за тренировки по баскетбол за период от 1 година. Нужна екипировка:
// • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function basketball(input){

    let yearlytax = Number(input[0]);
    let trainers = yearlytax - (yearlytax * 0.4);
    let jersey = trainers - (trainers * 0.2);
    let ball = jersey * 0.25;
    let accessories = ball * 0.20;

    let sum = yearlytax + trainers + jersey + ball + accessories;

    console.log(train);
}
basketball(["365"]);