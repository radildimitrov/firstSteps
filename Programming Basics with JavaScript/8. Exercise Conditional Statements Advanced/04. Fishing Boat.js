function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = input[2];
    let boatRent = 0;
     

    switch (season) {
        case 'Spring':
            boatRent = 3000;
            if (fishermen <= 6) {
                boatRent = boatRent * 0.90;
            } else if (fishermen <= 11){
                boatRent = boatRent * 0.85;
            } else if (fishermen > 12){
                boatRent = boatRent * 0.75;
            }
            break;
        case 'Summer':
            boatRent = 4200;
            if (fishermen <= 6) {
                boatRent = boatRent * 0.90;
            } else if (fishermen <= 11){
                boatRent = boatRent * 0.85;
            } else if (fishermen > 12){
                boatRent = boatRent * 0.75;
            }
            break;
        case 'Autumn':
            boatRent = 4200;
            if (fishermen <= 6) {
                boatRent = boatRent * 0.90;
            } else if (fishermen <= 11){
                boatRent = boatRent * 0.85;
            } else if (fishermen > 12){
                boatRent = boatRent * 0.75;
            }
            break;
        case 'Winter':
            boatRent = 2600;
            if (fishermen <= 6) {
                boatRent = boatRent * 0.90;
            } else if (fishermen <= 11){
                boatRent = boatRent * 0.85;
            } else if (fishermen > 12){
                boatRent = boatRent * 0.75;
            }
            break;
    }

    if (fishermen % 2 == 0 && season != 'Autumn') {
        boatRent = boatRent * 0.95;
    } else { boatRent = boatRent        
    }

    if (boatRent <= budget) {
        console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`)
    } else {console.log(`Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`)
        
    }

}
