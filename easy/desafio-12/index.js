function commercialSpaceport (value) {

    const creditsValuesList = [1, 5, 10, 25, 100, 500];

    const commercialValue = {};

    [...creditsValuesList].reverse().forEach(creditValue => {

        let amount = 0;

        while (value >= creditValue) {

            value -= creditValue;

            amount++;

        }

        commercialValue[`${creditValue}`] = amount;

    });

    return commercialValue;

}

console.log(commercialSpaceport(478));

console.log(commercialSpaceport(384));

console.log(commercialSpaceport(5412));

console.log(commercialSpaceport(50));