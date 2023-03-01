function lowerOrUpper(givenCharacter) {
  if (
    givenCharacter.charCodeAt(0) >= 65 &&
    givenCharacter.charCodeAt(0) <= 90
  ) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}
lowerOrUpper("L");
