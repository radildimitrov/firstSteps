function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let area = width * length * height;
  // 1 kashon e edin kubichen metur (1m X 1m X 1m);
  let index = 3;
  let command = input[index];
  let movedBoxes = 0;

  while (command !== "Done") {
    let boxes = Number(command);
    movedBoxes += boxes;
    if (movedBoxes >= area) {
      console.log(
        `No more free space! You need ${movedBoxes - area} Cubic meters more.`
      );
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "Done") {
    console.log(`${area - movedBoxes} Cubic meters left.`);
  }
}
