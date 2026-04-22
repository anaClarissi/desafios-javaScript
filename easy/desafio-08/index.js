function reorganizingNames (name) {

    let reorganized = "";

    let listNames = String(name).toUpperCase().split(' ');

    const lastName = listNames[listNames.length - 1]

    reorganized += lastName + ", ";
    
    listNames.pop();

    listNames.forEach(word => {

        reorganized += word.charAt(0) + ". ";

    })


    return reorganized.trim();

}


console.log(reorganizingNames("Isaac Larrubia Ferreira Pontes"));

console.log(reorganizingNames("John Ronald Ruel Tolkien"));

console.log(reorganizingNames("christopher james paolini"));

console.log(reorganizingNames("Suzanne Marie Colins"));