function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = input[2];
    let price = 0;

    if (town == "Sofia") {
        if (product == "coffee") {
            price = quantity * 0.50;
        } else if (product == "water") {
            price = quantity * 0.80;
        } else if (product == "beer") {
            price = quantity * 1.20;
        } else if (product == "sweets") {
            price = quantity * 1.45;
        } else if (product == "peanuts") {
            price = quantity * 1.60;
        }
    } else if (town == "Plovdiv") { 
        if (product == "coffee") {
            price = quantity * 0.40;
        } else if (product == "water") {
            price = quantity * 0.70;
        } else if (product == "beer") {
            price = quantity * 1.15;
        } else if (product == "sweets") {
            price = quantity * 1.30;
        } else if (product == "peanuts") {
            price = quantity * 1.50;
        }
    } else if (town == "Varna") { //0.45 0.70 1.10 1.35 1.55
        if (product == "coffee") {
            price = quantity * 0.45;
        } else if (product == "water") {
            price = quantity * 0.70;
        } else if (product == "beer") {
            price = quantity * 1.10;
        } else if (product == "sweets") {
            price = quantity * 1.35;
        } else if (product == "peanuts") {
            price = quantity * 1.55;
        }
    }
    console.log(price);
}
smallShop(["sweets", "Sofia", "2.23"])