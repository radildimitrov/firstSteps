function pcStore(input) {
  let priceForProcessorInDollars = Number(input[0]);
  let priceForVideoCardInDollars = Number(input[1]);
  let priceForRamInDollars = Number(input[2]);
  let numberOfRam = Number(input[3]);
  let percentDiscount = Number(input[4]);
  let sum = 0;

  let priceForProcessorInLeva = priceForProcessorInDollars * 1.57;
  let priceForVideoCardInLeva = priceForVideoCardInDollars * 1.57;
  let priceForRamInLeva = priceForRamInDollars * 1.57;
  let totalPriceForRam = priceForRamInLeva * numberOfRam;
  let priceForProcessorAfterDiscount =
    priceForProcessorInLeva - priceForProcessorInLeva * percentDiscount;
  let priceForVideoCardAfterDiscount =
    priceForVideoCardInLeva - priceForVideoCardInLeva * percentDiscount;

  sum =
    priceForProcessorAfterDiscount +
    priceForVideoCardAfterDiscount +
    totalPriceForRam;

  console.log(`Money needed - ${sum.toFixed(2)} leva.`);
}
pcStore(["200", "100", "80", "1", "0.01"]);
