//Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
// Секундите да се изведат с водеща нула (2 -> "02", 7 -> "07", 35 > "35").

function sumseconds(input){
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number (input[2]);
    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }   else {
        console.log(`${minutes}:${seconds}`);
    } 
    
}

sumseconds(["35","45","44"])