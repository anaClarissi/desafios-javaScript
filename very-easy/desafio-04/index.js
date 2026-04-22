function spatialCalculus(number) {

    let result = "";

    const digits = String(number).split('');

    digits.forEach(digit => {

        result += Math.pow(digit, 2);

    });

    return Number(result);

}

console.log(spatialCalculus(3514));

console.log(spatialCalculus(94571));

console.log(spatialCalculus(24));

console.log(spatialCalculus(745821698));