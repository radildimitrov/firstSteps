function dayOfWeek(num) {
  let daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num < 1 || num > 7) {
    console.log("Invalid day!");
  } else {
    console.log(daysOfTheWeek[num - 1]);
  }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
