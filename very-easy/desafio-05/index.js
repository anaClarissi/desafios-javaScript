function largerLetter (word) {

    return String(word).replace('/\s/g', '').split('').sort().reverse()[0];

}

console.log(largerLetter('Lorem ipsum dolore sec avanti'));

console.log(largerLetter('Hello'));

console.log(largerLetter('May the force be with you'));

console.log(largerLetter('Its over nine thounsand'));