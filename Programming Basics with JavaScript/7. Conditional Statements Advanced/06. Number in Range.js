function numberInRange(input) {
    let digit = Number(input[0]);

    if (digit >= -100 && digit <= 100 && digit != 0){
        console.log("Yes");
    } else {
        console.log("No");
    }
}
numberInRange(["25"])