/*

*/

function timeAdd15Minutes(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);

    let time = h * 60 + m + 15;

    let totalH = Math.floor(time / 60);
    let totalM = time % 60;

    if (totalH > 23){
        totalH = 0;
    }

    if (totalM < 10){
        console.log(`${totalH}:0${totalM}`);
    }   else{
        console.log(`${totalH}:${totalM}`);
    }
    
}
timeAdd15Minutes(["23", "45"]);