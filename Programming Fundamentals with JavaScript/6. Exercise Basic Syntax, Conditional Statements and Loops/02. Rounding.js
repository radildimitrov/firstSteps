function rounding(digit, rounder) {
  if (rounder > 15) {
    rounder = 15;
  }
  console.log(parseFloat(digit.toFixed(rounder)));
}
rounding(3.1415926535897932384626433832795, 2);
