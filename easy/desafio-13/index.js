function shipIdentification(code) {

    const codeDigits = Array.from(String(code), Number);

    let sumOfPairs = 0;

    let sumOfOddNumbers = 0;

    for (let i = 0; i < codeDigits.length; i++) {

        if (i % 2 === 0) {

            sumOfPairs += codeDigits[i];

        } else {

            sumOfOddNumbers += codeDigits[i];

        }

    }

    const sumResult = ((sumOfPairs * 3) + sumOfOddNumbers) % 10;

    return sumResult === 0;

}

console.log(shipIdentification(547020743789));

console.log(shipIdentification(301354030348));

console.log(shipIdentification(301354030349));

console.log(shipIdentification(123456789872));