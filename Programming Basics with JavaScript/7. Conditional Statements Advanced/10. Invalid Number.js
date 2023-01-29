function invalidNumber(input) {
    let digit = Number(input[0]);
    if (digit >= 100 && digit <= 200 || digit == 0){
    } else {
        console.log("invalid");
    }
}
invalidNumber(["75"]);