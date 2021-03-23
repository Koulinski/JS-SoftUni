function wordLength(a) {

    let filteredWords = a.sort().sort((a, b) => a.length - b.length);

    console.log(filteredWords.join(' \n'));
}
wordLength(['test', 'Deny', 'Default', 'omen']);