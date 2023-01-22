// Да се напише функция, която получава цяло число и проверява дали е под 100, между 100 и 200 или над 200.

function checker(input){
    
    let digit = Number(input[0]);

    if (digit < 100){
        console.log("Less than 100");
    }   else if (digit <= 200){
        console.log("Between 100 and 200");
    }   else if (digit > 200){
        console.log("Greater than 200");
    }
 
}
checker(["200"]);