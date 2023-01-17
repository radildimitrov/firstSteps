function oscars(input) {
    let nameOfActor = input[0];
    let pointsFromAcademy = Number(input[1]);
    let numberOfJury = Number(input[2]);

    let score = 0;

    // Ако точките са над 1250.5:
    // "Congratulations, {име на актьора} got a nominee for leading role with {точки}!"

    //Ако точките не са достатъчни:
    //"Sorry, {име на актьора} you need {нужни точки} more!"

    //Резултатът да се форматирана до първата цифра след десетичния знак!

    for (let index = 3; index < input.length; index++){
        let currentPoints = input[index];
        score = currentPoints
}
}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])