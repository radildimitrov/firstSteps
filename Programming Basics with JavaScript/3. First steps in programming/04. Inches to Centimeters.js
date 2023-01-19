// Да се напише функция, която чете от конзолата реално число и го преобразува от инчове в сантиметри. За целта умножете инчовете по 2.54 (1 инч = 2.54 см)
// Примерен Вход : 5
// Примерен Изход : 12.7

function inchtocmconvert(input){
    let inch = Number(input[0]);
    let cm = 2.54;
    let finalSum = inch * cm;
    console.log(finalSum);    
}
inchtocmconvert(["5"]);