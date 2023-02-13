function clock(input) {
  for (let h = 0; h <= 23; h++) {
    for (let m = 0; m <= 59; m++) {
      let hours = "";
      let minutes = "";

      if (h < 10) {
        hours = `0${h}`;
      } else {
        hours = `${h}`;
      }

      if (m < 10) {
        minutes = `0${m}`;
      } else {
        minutes = `${m}`;
      }
      console.log(`${hours}:${minutes}`);
    }
  }
}
clock();
