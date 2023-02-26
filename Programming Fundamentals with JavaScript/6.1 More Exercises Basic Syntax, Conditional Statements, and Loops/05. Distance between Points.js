function distanceBetweenPoints(x1, y1, x2, y2) {
  let x3 = Math.abs(x1 - x2);
  let y3 = Math.abs(y1 - y2);
  let result = Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2));
  console.log(result);
}
distanceBetweenPoints(2, 4, 5, 0);
