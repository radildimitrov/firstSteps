function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination
    let accomodation
    let spent
    if (budget <= 100){
        switch(season){
            case 'summer':
            destination = 'Bulgaria';
            accomodation = 'Camp';
            spent = budget - (budget * 0.70);
            console.log(`Somewhere in ${destination}`);
            console.log(`${accomodation} - ${(spent).toFixed(2)}`);
            break;
            case 'winter':
            destination = 'Bulgaria';
            accomodation = 'Hotel';
            spent = budget - (budget * 0.30);
            console.log(`Somewhere in ${destination}`);
            console.log(`${accomodation} - ${(spent).toFixed(2)}`);
            break;
        }
    }
    if (budget > 100 && budget <= 1000){
        switch(season){
            case 'summer':
            destination = 'Balkans';
            accomodation = 'Camp';
            spent = budget - (budget * 0.60);
            console.log(`Somewhere in ${destination}`);
            console.log(`${accomodation} - ${(spent).toFixed(2)}`);
            break;
            case 'winter':
            destination = 'Balkans';
            accomodation = 'Hotel';
            spent = budget - (budget * 0.20);
            console.log(`Somewhere in ${destination}`);
            console.log(`${accomodation} - ${(spent).toFixed(2)}`);
            break;
        }
    }
    if (budget > 1000){
        switch(season){
            case 'summer':
            destination = 'Europe';
            accomodation = 'Hotel';
            spent = budget - (budget * 0.10);
            console.log(`Somewhere in ${destination}`);
            console.log(`${accomodation} - ${(spent).toFixed(2)}`);
            break;
            case 'winter':
            destination = 'Europe';
            accomodation = 'Hotel';
            spent = budget - (budget * 0.10);
            console.log(`Somewhere in ${destination}`);
            console.log(`${accomodation} - ${(spent).toFixed(2)}`);
            break;
        }
    }
}
journey(["678.53", "winter"])