/*

*/

function godzillaVkongMovie(input) {
    let budgetForMovie = Number(input[0]);
    let numberOfStaff = Number(input[1]);
    let priceForClothingPerstaff = Number(input[2]);

    let sumDecor = budgetForMovie * 0.10;
    let sumCloth = numberOfStaff * priceForClothingPerstaff;
      if (numberOfStaff >= 150) {
        sumCloth = sumCloth - sumCloth * 0.10;
    }

    let totalSum = (sumDecor + sumCloth).toFixed(2);
    let diff = Math.abs(budgetForMovie - totalSum).toFixed(2);

    if (budgetForMovie >= totalSum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff} leva left.`)
    }   else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff} leva more.`)
    }
}
godzillaVkongMovie(["2",

"149",

"55.68"])