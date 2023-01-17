function cinema(input) {
    let typeOfProduction = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (typeOfProduction == "Premiere"){
        income = rows * columns * 12.0;
    } else if (typeOfProduction == "Normal"){
        income = rows * columns * 7.50;
    } else if (typeOfProduction == "Discount"){
        income = rows * columns * 5.00;
    } console.log(`${income.toFixed(2)} leva`);

}
cinema(["zz", "12", "30"])