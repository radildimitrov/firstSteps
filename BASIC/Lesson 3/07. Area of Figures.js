// Да се напише функция, която получава като вида и размерите на геометрична фигура и пресмята лицето й. 
// Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). 
// На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle).
//· Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
//· Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
//· Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
//· Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
//Резултатът да се закръгли до 3 цифри след десетичната запетая

function areaCalculation(input){
    let shape = input[0];
    let area = 0;
    if (shape === "square"){
        let side = Number(input[1]);
        area = (side * side).toFixed(3);
    }   else if (shape === "rectangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = (sideA * sideB).toFixed(3);
    }   else if (shape == "circle"){
        let radius = Number(input[1]);
        area = (Math.PI * radius * radius).toFixed(3);
    }   else if (shape === "triangle"){
        let Aside = Number(input[1]);
        let Ahight = Number(input[2]);
        area = ((Aside*Ahight)/2).toFixed(3);
    }
    console.log(area);
}
areaCalculation(["circle","6","2.5"]);