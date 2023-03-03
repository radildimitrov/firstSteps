function equalArray(arrayAlpha, arrayBeta) {
  let sumAlpha = 0;
  let sumBeta = 0;
  for (let i = 0; i < arrayAlpha.length; i++) {
    arrayAlpha[i] = Number(arrayAlpha[i]);
  }
  for (let i = 0; i < arrayBeta.length; i++) {
    arrayBeta[i] = Number(arrayBeta[i]);
  }
  for (let i = 0; i < arrayAlpha.length; i++) {
    sumAlpha += arrayAlpha[i];
  }
  for (let i = 0; i < arrayBeta.length; i++) {
    sumBeta += arrayBeta[i];
  }
  let areEqual = true;
  for (let i = 0; i < arrayAlpha.length; i++) {
    if (arrayAlpha[i] !== arrayBeta[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }
  if (sumAlpha == sumBeta) {
    console.log(`Arrays are identical. Sum: ${sumAlpha}`);
  }
}

equalArray(
  ["1", "2", "3", "4", "5"],

  ["1", "2", "4", "4", "5"]
);
