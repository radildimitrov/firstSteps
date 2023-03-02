function triangleArea(a, b, c) {
  let s = 0;
  let area = 0;
  s = (a + b + c) / 2;
  area = s * (s - a) * (s - b) * (s - c);
  console.log(Math.sqrt(area));
}
triangleArea(2, 3.5, 4);
