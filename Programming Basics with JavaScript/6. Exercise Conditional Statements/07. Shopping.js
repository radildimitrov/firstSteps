/*

*/

function shopping(input) {
    let petersBudget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsPrice = videocards * 250;
    let processorsPrice = processors * videocardsPrice * 0.35;
    let ramPrice = ram * videocardsPrice * 0.10;
    let totalSum = videocardsPrice + processorsPrice + ramPrice;


    if (videocards >= processors) {
        totalSum = totalSum - (totalSum * 0.15);        
    }

    let diff = Math.abs(petersBudget - totalSum).toFixed(2);

    if (petersBudget >= totalSum) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`)
    }    
}
shopping(["920.45",

"3",

"1",

"1"])