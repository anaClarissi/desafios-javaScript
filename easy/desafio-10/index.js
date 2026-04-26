function factorial(number) {

    const n = BigInt(number);

    if (n === 0n || n === 1n) return 1n;

    return n * factorial(n - 1n);

}

console.log(factorial(5));

console.log(factorial(0));

console.log(factorial(32));

console.log(factorial(9n));