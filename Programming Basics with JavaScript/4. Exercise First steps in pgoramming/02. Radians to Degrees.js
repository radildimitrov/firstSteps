// Напишете програма, която чете ъгъл в радиани (десетично число) и го преобразува в градуси. 
// Използвайте формулата: градус = радиан * 180 / π. Числото π в Java програми е достъпно чрез Math.PI.

function RtD(input){
    let radian = Number(input[0]);
    let degree = radian * 180 / Math.PI;
    console.log(degree);
}
RtD(["3.1416"]);