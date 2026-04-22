function reversedWord(phrase) {

    let reversed = [];

    String(phrase).split(" ").forEach(words => reversed.push(words.split("").reverse().join("").toLowerCase()));

    return reversed.join(" ");

}

console.log(reversedWord("Lorem ipsum dolore sec avanti"));

console.log(reversedWord("This is an apple"));

console.log(reversedWord("May the force be with you"));

console.log(reversedWord("It s over nine thousand"));