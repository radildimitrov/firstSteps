function onTimeForTheExam(input) {
  let hourOfExam = Number(input[0]);
  let minuteOfExam = Number(input[1]);
  let hourOfArrival = Number(input[2]);
  let minuteOfArrival = Number(input[3]);

  let examMinutesAfterMidnight = (hourOfExam * 60) + minuteOfExam;
  let arrivalMinutesAfterMidnight = (hourOfArrival * 60) + minuteOfArrival;

  // late
    //"mm minutes after the start" за закъснение под час.
    // "hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".
  if (arrivalMinutesAfterMidnight > examMinutesAfterMidnight){
    console.log("Late");
    if ((arrivalMinutesAfterMidnight - examMinutesAfterMidnight) < 60){
      console.log(`${(arrivalMinutesAfterMidnight - examMinutesAfterMidnight)} minutes after the start`);
    }
    if ((arrivalMinutesAfterMidnight - examMinutesAfterMidnight) == 60){
      console.log(`1:00 hour after the start`);
    }
    if ((arrivalMinutesAfterMidnight - examMinutesAfterMidnight) > 60 && (minuteOfArrival - minuteOfExam) < 10){
         console.log(`${(hourOfArrival - hourOfExam)}:0${minuteOfArrival - minuteOfExam} hours after the start`);
    } else if ((arrivalMinutesAfterMidnight - examMinutesAfterMidnight) > 60){
      console.log(`${(hourOfArrival - hourOfExam)}:${(minuteOfArrival - minuteOfExam)} hours after the start`);
    }
  }
// on time
  if (arrivalMinutesAfterMidnight == examMinutesAfterMidnight){
    console.log("On time");

  }
  if (((arrivalMinutesAfterMidnight - examMinutesAfterMidnight) <= 30) && ((arrivalMinutesAfterMidnight - examMinutesAfterMidnight) != 0)){
    console.log(`${(arrivalMinutesAfterMidnight - examMinutesAfterMidnight)} before the start`);
  }
 


  // console.log("On time") ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
  // console.log("Early") ако студентът пристига повече от 30 минути преди часа на изпита.


}
onTimeForTheExam(["9","00","08","59"])
