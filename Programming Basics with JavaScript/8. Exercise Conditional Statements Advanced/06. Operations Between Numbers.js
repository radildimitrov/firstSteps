function operationsBetweenNumbers(input) {
    
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let symbol = input[2];
    let result = 0;
    let evenOrOdd
    
    switch(symbol){
        case '+': //"{N1} {оператор} {N2} = {резултат} – {even/odd}"
        result = (n1 + n2);
        if (result % 2 == 0){
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrOdd}`);
        break;

        case '-':
        result = (n1 - n2);
        if (result % 2 == 0){
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrOdd}`);
        break; 
        
        case '*':
        result = (n1 * n2);
        if (result % 2 == 0){
        evenOrOdd = "even";
        } else {
        evenOrOdd = "odd";
        }
        console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOrOdd}`);
        break; 
        
        case '/': //"{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
        if (n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        } else {
        result = (n1 / n2).toFixed(2);
        console.log(`${n1} / ${n2} = ${result}`)
        }
        break;

        case '%': //"{N1} % {N2} = {остатък}"
        if (n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        } else {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
        }break;
    }

} 

operationsBetweenNumbers(["10", "0", "%"])