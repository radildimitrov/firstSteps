//Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.
//Примерен вход и изход 
// вход (["22"]) изход 39.50078  вход (["100"]) изход 179.549 вход (["12.5"]) изход 22.443625
    
function USDtoBGN(input){
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}
USDtoBGN(["22"]);