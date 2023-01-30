function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let priceStudio = 0;
  let priceAppartment = 0;

  switch (month) {
    case "May":
      priceStudio = 50;
      priceAppartment = 65;
      if (nights > 7 && nights < 14) {
        priceStudio = priceStudio * 0.95;
      } else if (nights > 14) {
        priceStudio = priceStudio * 0.7;
        priceAppartment = priceAppartment * 0.9;
      }
      console.log(`Apartment: ${(priceAppartment * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`);
      break;

    case "October":
      priceStudio = 50;
      priceAppartment = 65;
      if (nights > 7 && nights < 14) {
        priceStudio = priceStudio * 0.95;
      } else if (nights > 14) {
        priceStudio = priceStudio * 0.7;
        priceAppartment = priceAppartment * 0.9;
      }
      console.log(`Apartment: ${(priceAppartment * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`);
      break;

    case "June":
      priceStudio = 75.2;
      priceAppartment = 68.7;
      if (nights > 14) {
        priceStudio = priceStudio * 0.8;
        priceAppartment = priceAppartment * 0.9;
      }
      console.log(`Apartment: ${(priceAppartment * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`);
      break;

    case "September":
      priceStudio = 75.2;
      priceAppartment = 68.7;
      if (nights > 14) {
        priceStudio = priceStudio * 0.8;
        priceAppartment = priceAppartment * 0.9;
      }
      console.log(`Apartment: ${(priceAppartment * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`);
      break;

    case "July":
      priceStudio = 76;
      priceAppartment = 77;
      if (nights > 14) {
        priceAppartment = priceAppartment * 0.9;
      }
      console.log(`Apartment: ${(priceAppartment * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`);
      break;

    case "August":
      priceStudio = 76;
      priceAppartment = 77;
      if (nights > 14) {
        priceAppartment = priceAppartment * 0.9;
      }
      console.log(`Apartment: ${(priceAppartment * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`);
      break;
  }
}
hotelRoom(["May", "15"]);
