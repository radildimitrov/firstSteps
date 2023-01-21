// Да се напише програма, която изчислява литрите вода, която са необходими за напълването на аквариума.

function fishtank(input){

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let obem = lenght * width * height;
    let obemLiters = obem * 0.001;
    let zaeto = percent * 0.01;

    let sum = obemLiters * (1-zaeto);
    console.log(sum);
}
fishtank(["85","75","47","17"]);