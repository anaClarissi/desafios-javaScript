function countLetters(text) {

    const letters = String(text).toLowerCase().replaceAll(' ', '').split('');
    
    const quantityList = new Map();

    letters.forEach(letter => quantityList.set(letter, (quantityList.get(letter) || 0) + 1));

    const counts = Array.from(quantityList.values());

    if (counts.length === 0) return false;

    const firstCount = counts[0];

    return counts.every(count => count === firstCount);

    
}

console.log(countLetters("This is Thee"));

console.log(countLetters("ssd"));

console.log(countLetters("Lorem ipsum"));

console.log(countLetters("QQwweerrttyy"));