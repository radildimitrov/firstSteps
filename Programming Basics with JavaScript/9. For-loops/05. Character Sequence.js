function characterSequence(input) {
    let word = input[0];
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        console.log(letter);        
    }
}
characterSequence(["softuni"]);