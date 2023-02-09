function readText(input) {
  let index = 0;
  let text = "";

  while (true) {
    let text = input[index];

    if (text == "Stop") {
      break;
    }
    console.log(text);
    index++;
  }
}
readText([
  "Nakov",

  "SoftUni",

  "Sofia",

  "Bulgaria",

  "SomeText",

  "Stop",

  "AfterStop",

  "Europe",

  "HelloWorld",
]);
