function sumFirstAndLastArrayElements(arr) {
    let firstElement = arr[0];
    let lastIndex = arr.length - 1;
    let lastElement = arr[lastIndex];
    console.log(firstElement + lastElement);
}
sumFirstAndLastArrayElements([20, 30, 40])