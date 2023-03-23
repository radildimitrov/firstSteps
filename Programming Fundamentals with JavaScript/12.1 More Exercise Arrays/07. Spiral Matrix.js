function generateSpiralMatrix(rows, cols) {
  let matrix = [];
  let counter = 1;
  let startRow = 0;
  let endRow = rows - 1;
  let startCol = 0;
  let endCol = cols - 1;

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0;
    }
  }

  while (startRow <= endRow && startCol <= endCol) {
    // fill the top row
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;

    // fill the right column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;

    // fill the bottom row
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter++;
    }
    endRow--;

    // fill the left column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter++;
    }
    startCol++;
  }

  for (let i = 0; i < rows; i++) {
    console.log(matrix[i].join(" "));
  }
}
spiralMatrix(5, 5);
