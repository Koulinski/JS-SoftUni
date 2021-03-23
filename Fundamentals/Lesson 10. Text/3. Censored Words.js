function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    return text;
}
console.log(

    censoredWords('A small sentance with some words', 'small')
);