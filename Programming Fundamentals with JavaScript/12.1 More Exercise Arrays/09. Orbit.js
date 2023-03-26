function buildOrbits(input) {
  const [width, height, x, y] = input;
  const matrix = [];

  for (let i = 0; i < height; i++) {
    matrix[i] = new Array(width).fill(0);
  }

  matrix[y][x] = 1;

  let orbit = 2;
  for (let i = 1; i < Math.max(width, height); i++) {
    for (let j = y - i; j <= y + i; j++) {
      for (let k = x - i; k <= x + i; k++) {
        if (j >= 0 && j < height && k >= 0 && k < width && matrix[j][k] === 0) {
          matrix[j][k] = orbit;
        }
      }
    }
    orbit++;
  }

  console.log(matrix.map((row) => row.join(" ")).join("\n"));
}

buildOrbits([5, 5, 2, 2]);
