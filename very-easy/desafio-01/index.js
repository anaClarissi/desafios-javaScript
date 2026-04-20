function media (...numeros) {

    if (numeros.length === 0) return 0;

    let soma = numeros.reduce((acumulador, numero) => acumulador + numero,0);

    return soma / numeros.length;

}

console.log(media());

console.log(media(10, 9, 6, 8, 9, 1, 5, 7));

console.log(media(2, 5, 7, 1, -2));

console.log(media(10, 10, 10, 10, 9));

console.log(media(25, 75));