function studentInformation(studentName, studentAge, studentGrade) {
  studentGrade = Number(studentGrade).toFixed(2)
  console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade}`);
}
studentInformation('John', 15, 5.54678)
