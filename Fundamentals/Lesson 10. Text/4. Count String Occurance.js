function stringOcr(text, word) {
    let words = text.split(' ').filter(x => x === word).length;
    return words;
}
console.log(stringOcr('This is a word and it also is a sentence', 'is'));