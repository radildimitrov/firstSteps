function printAndSum(start, end) {
    let buffer = "";
    let sum = 0;
    for (let i = start; i <= end ; i++) {
        buffer += i + " ";      
        sum += i; 
    }
    console.log(buffer.trim());
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);