function getChunks(numberOfChunks) {

    if (numberOfChunks === 1) return "chunk";

    return getChunks(numberOfChunks - 1) + "-chunk";
        
}


console.log(getChunks(4));

console.log(getChunks(1));

console.log(getChunks(8));

console.log(getChunks(2));