function maxNumber(input) {

    let inputElemnt = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (inputElemnt !== "Stop"){
        let num = Number(inputElemnt);
        if (num > max){
            max = num;
        }
        inputElemnt = input[index];
        index++;
    }
    console.log(max);
    
}
maxNumber(["100",

"99",

"80",

"70",

"Stop"])