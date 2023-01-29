function summerOutfit(input) {
    
    let temperature = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = 0;
    let shoes = 0;

    if (timeOfDay == "Morning"){
        if (10 <= temperature && temperature <= 18){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (18 < temperature && temperature <= 24){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature >= 25){
            outfit = "T-Shirt";
            shoes = "Sandals";
    }} 
        if (timeOfDay == "Afternoon"){
            if (10 <= temperature && temperature <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (18 < temperature && temperature <= 24){
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temperature >= 25){
                outfit = "Swim Suit";
                shoes = "Barefoot";
        }
    }
        if (timeOfDay == "Evening"){
            if (10 <= temperature && temperature <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (18 < temperature && temperature <= 24){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature >= 25){
                outfit = "Shirt";
                shoes = "Moccasins";
        }}
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16","Morning"]);