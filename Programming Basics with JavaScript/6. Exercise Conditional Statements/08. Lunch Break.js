/*

*/

function lunchBreak(input) {
    let name = input[0];
    let durationEP = Number(input[1]);
    let durationBreak = Number(input[2]);
    
    let lunch = durationBreak / 8;
    let relaxTime = durationBreak / 4;
    
    let totalFreetime = durationBreak - lunch - relaxTime;
    let diff = Math.abs(totalFreetime - durationEP);

    if(totalFreetime >= durationEP){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`)
    }   else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`)
    }



}

lunchBreak(["Teen Wolf",

"48",

"60"])