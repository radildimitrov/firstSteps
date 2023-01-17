// да се напише функция, която чете оценка, получена като аргумент и отпечатва "Excellent!", ако оценката е 5.50 или по-висока.

function isExcellent(input){
    let grade = Number(input[0]);
    if (grade >= 5.50) {
        console.log("Excellent!");
    }

}
isExcellent(["5.50"])