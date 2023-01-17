function finalCompetition(input) {
    let numberOfDancers = Number(input[0]);
    let numberOfPoints = Number(input[1]);
    let season = input[2];
    let location = input[3];
    let price = 0;
    let cost = 0;
    let charity = 0;
    let remainingMoney = 0;
    let pricePerDancer = 0;

    //"Charity - {сума за благотворителност}"
    //"Money per dancer - {сума за танцьор}"
    //Сумите да бъдат форматирани до втория знак след десетичната запетая

    if (numberOfDancers == 0 || numberOfPoints == 0) {
        console.log(`Charity - 0.00`);
        console.log(`Money per dancer - 0.00`);
    } else {

    switch(season){
        case `summer`:
            if (location == "Abroad"){
                price = (numberOfDancers * numberOfPoints) + ((numberOfDancers * numberOfPoints) * 0.50);
                cost = price - (price * 0.10);
                charity = cost - (cost * 0.25);
                remainingMoney = cost - charity;
                pricePerDancer = remainingMoney / numberOfDancers;
            } else {
                price = numberOfDancers * numberOfPoints;
                cost = price - (price * 0.05);
                charity = cost - (cost * 0.25);
                remainingMoney = cost - charity;
                pricePerDancer = remainingMoney / numberOfDancers;

            }
            break;
        case `winter`:
            if (location == "Bulgaria"){
                price = numberOfDancers * numberOfPoints;
                cost = price - (price * 0.08);
                charity = cost - (cost * 0.25);
                remainingMoney = cost - charity;
                pricePerDancer = remainingMoney / numberOfDancers;
            } else {
                price = (numberOfDancers * numberOfPoints) + ((numberOfDancers * numberOfPoints) * 0.50);
                cost = price - (price * 0.15);
                charity = cost - (cost * 0.25);
                remainingMoney = cost - charity;
                pricePerDancer = remainingMoney / numberOfDancers;
            }
            break;

        }        console.log(`Charity - ${(charity).toFixed(2)}`);
        console.log(`Money per dancer - ${(pricePerDancer).toFixed(2)}`);}

}
finalCompetition(["1",
"89.5",
"summer",
"Abroad"])


