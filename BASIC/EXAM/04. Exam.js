function exam(input) {
  let numberOfStudents = Number(input[0]);
  let topStudents = 0;
  let fourandfourninetynine = 0;
  let threeandthreeninetynine = 0;
  let fail = 0;
  let avarage = 0;

  //Ред 1 - "Top students: {процент студенти с успех 5.00 или повече}%"
  //Ред 2 - "Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
  //Ред 3 - "Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
  //Ред 4 - "Fail: {по-малко от 3.00}%"
  //Ред 5 - "Average: {среден успех}"

  for (let index = 1; index <= numberOfStudents; index++) {
    let current = Number(input[index]);
    if (current >= 5.0) {
      topStudents++;
    } else if (current >= 4.0 && current <= 4.99) {
      fourandfourninetynine++;
    } else if (current >= 3.0 && current <= 3.99) {
      threeandthreeninetynine++;
    } else if (current <= 2.99) {
      fail++;
    }
    avarage += current;
  }
  console.log(
    `Top students: ${((topStudents / numberOfStudents) * 100).toFixed(2)}%`
  );
  console.log(
    `Between 4.00 and 4.99: ${(
      (fourandfourninetynine / numberOfStudents) *
      100
    ).toFixed(2)}%`
  );
  console.log(
    `Between 3.00 and 3.99: ${(
      (threeandthreeninetynine / numberOfStudents) *
      100
    ).toFixed(2)}%`
  );
  console.log(`Fail: ${((fail / numberOfStudents) * 100).toFixed(2)}%`);
  console.log(`Average: ${(avarage / numberOfStudents).toFixed(2)}`);
}
exam(["6", "2", "3", "4", "5", "6", "2.2"]);
