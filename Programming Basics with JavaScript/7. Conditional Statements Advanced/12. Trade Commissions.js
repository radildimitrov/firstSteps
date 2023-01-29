function tradeCommission(input) {
    let city = input[0];
    let revenue = Number(input[1]);
    let comission = 0;
    
    if (city == "Sofia") {
        if (revenue >= 0 && revenue <= 500){
            comission = revenue - (revenue * 0.95);
            console.log(comission.toFixed(2));
        } else if (revenue > 500 && revenue <= 1000){
            comission = revenue - (revenue * 0.93);
            console.log(comission.toFixed(2));
        } else if (revenue > 1000 && revenue <= 10000){
            comission = revenue - (revenue * 0.92);
            console.log(comission.toFixed(2));
        } else if (revenue > 10000){
            comission = revenue - (revenue * 0.88);
            console.log(comission.toFixed(2));
        } else {
            console.log("error");
        }}
    else if (city == "Varna"){
        if (revenue >= 0 && revenue <= 500){
            comission = revenue - (revenue * 0.955);
            console.log(comission.toFixed(2));
        } else if (revenue > 500 && revenue <= 1000){
            comission = revenue - (revenue * 0.925);
            console.log(comission.toFixed(2));
        } else if (revenue > 1000 && revenue <= 10000){
            comission = revenue - (revenue * 0.90);
            console.log(comission.toFixed(2));
        } else if (revenue > 10000){
            comission = revenue - (revenue * 0.87);
            console.log(comission.toFixed(2));
        } else {
            console.log("error");
        }}
    else if (city == "Plovdiv"){
        if (revenue >= 0 && revenue <= 500){
            comission = revenue - (revenue * 0.945);
            console.log(comission.toFixed(2));
        } else if (revenue > 500 && revenue <= 1000){
            comission = revenue - (revenue * 0.92);
            console.log(comission.toFixed(2));
        } else if (revenue > 1000 && revenue <= 10000){
            comission = revenue - (revenue * 0.88);
            console.log(comission.toFixed(2));
        } else if (revenue > 10000){
            comission = revenue - (revenue * 0.855);
            console.log(comission.toFixed(2));
        } else {
            console.log("error");
        }
    }
    else {(city != "Sofia" || city != "Plovdiv" || city != "Varna")
        console.log("error");
}   }
tradeCommission(["Varna", "500"])