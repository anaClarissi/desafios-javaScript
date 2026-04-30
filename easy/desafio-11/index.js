function coordinateRange([maxX, maxY]) {

    const result = [];

    for (let x = 0; x <= maxX; x++) {

        for (let y = 0; y <= maxY; y++) {

            result.push([x, y]);

        }

    }

    return result;

}

console.log(coordinateRange([2,2]));

console.log(coordinateRange([2,7]));

console.log(coordinateRange([-3,-3]));

console.log(coordinateRange([7,6]));