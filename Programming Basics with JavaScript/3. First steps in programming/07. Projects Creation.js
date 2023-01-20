// Напишете програма, която изчислява колко часа ще са необходими на един архитект, 
// за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.

function projects(input){

    // "The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
    let name = input[0];
    let numberofProjects = input[1];
    let hours = numberofProjects * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${numberofProjects} project/s.`)

}
projects(["Radil", "4"])