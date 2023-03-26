function repeatString(array, repeat) {
  let str = "";
  for (let i = 0; i < repeat; i++) {
    str += array;
  }
  return str;
}
repeatString("abc", 3);
