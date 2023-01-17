//Ресторант отваря врати и предлага няколко менюта на преференциални цени:
// • Пилешко меню – 10.35 лв.
// • Меню с риба – 12.40 лв.
// • Вегетарианско меню – 8.15 лв.
// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).
// Цената на доставка е 2.50 лв и се начислява най-накрая.

// Вход
// От конзолата се четат 3 реда:
// · Брой пилешки менюта – цяло число в интервала [0 … 99]
// · Брой менюта с риба – цяло число в интервала [0 … 99]
// · Брой вегетариански менюта – цяло число в интервала [0 … 99]

//Изход
// Да се отпечата на конзолата един ред: "{цена на поръчката}

function fooddelivery(input){

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegiMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let vegiMenusPrice = vegiMenus * 8.15;

    let allMenuPrice = chickenMenusPrice + fishMenusPrice + vegiMenusPrice;
    let desert = allMenuPrice * 0.20
    let delivery = 2.50

    let totalSum = allMenuPrice + desert + delivery
    console.log(totalSum);

}
fooddelivery(["2","4","3"])