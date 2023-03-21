function rotateArray(arr) {
  //remove the last element
  //that element shows how many rotations must be done
  let numberOfRotations = arr.pop();

  //remove the last element
  //add it to the front
  for (let i = 0; i < numberOfRotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  console.log(arr.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
