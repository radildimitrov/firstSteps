function addAndRemove(array) {
  //1. create an array; initial number is 1
  let newArray = [];
  let initialNumber = 1;
  let element = 0;

  for (let i = 0; i < array.length; i++) {
    element = array[i];
    //2. when add (add + 1 to initial number);
    if (element == "add") {
      newArray.push(initialNumber + i);
      //3. when remove (remove last initial number in the array);
    } else {
      newArray.splice(1, 1);
    }
  }
  //4. Print elements in a row, separated by a single space;
  if (newArray != 0) {
    console.log(newArray.join(" "));
  } else {
    //5. In case of an empty array, just print "Empty";
    console.log("Empty");
  }
}
addAndRemove(["remove", "remove", "remove"]);
