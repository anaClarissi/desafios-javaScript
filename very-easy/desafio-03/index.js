function reversedArray(array) {

    const reversed = [];

    for (let i = array.length - 1; i >= 0; i--) {

        reversed.push(array[i]);

    }

    return reversed;

}

console.log(reversedArray([0, 9, 6, 8, 9, 1, 5, 7]));

console.log(reversedArray(['OH', 'HI', 'Mark']));

console.log(reversedArray([false, true, true, true]));

console.log(reversedArray(["it's", 'not', true, 0]));