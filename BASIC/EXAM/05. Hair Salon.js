function hairSalon(input) {
  let goal = Number(input[0]);
  let index = 1;
  let profit = 0;
  let mens = 15;
  let ladies = 20;
  let kids = 10;
  let touchup = 20;
  let fullcolor = 30;
  let type = "";
  let gender = "";
  let coloring = "";

  while (input[index] != "closed") {
    let type = input[index];
    if (goal <= profit) {
      console.log("You have reached your target for the day!");
      console.log(`Earned money: ${profit}lv.`);
      break;
    } else {
      switch (type) {
        case "haircut":
          index++;
          let gender = input[index];
          if (gender == "ladies") {
            profit = profit + ladies;
            index++;
          } else if (gender == "mens") {
            profit = profit + mens;
            index++;
          } else if (gender == "kids") {
            profit = profit + kids;
            index++;
          }
          break;
        case "color":
          index++;
          let coloring = input[index];
          if (coloring == "touch up") {
            profit = profit + touchup;
            index++;
          } else if (coloring == "full color") {
            profit = profit + fullcolor;
            index++;
          }
          break;
      }
    }
  }

  if (goal > profit) {
    console.log(`Target not reached! You need ${goal - profit}lv. more.`);
    console.log(`Earned money: ${profit}lv.`);
  }
}
hairSalon(["50", "color", "full color", "haircut", "ladies"]);
