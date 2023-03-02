function cone(radius, height) {
  let Volume = 0;
  let S = Math.sqrt(radius * radius + height * height);
  let L = 3.1415926535898 * radius * S;
  let B = 3.1415926535898 * (radius * radius);
  let Area = L + B;
  Volume = (1 / 3) * 3.1415926535898 * (radius * radius) * height;
  console.log(`volume = ${Volume.toFixed(4)}`);
  console.log(`area = ${Area.toFixed(4)}`);
}
cone(3, 5);
