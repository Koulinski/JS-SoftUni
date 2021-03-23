function wordCount(input) {
    let words = String(input);
    let sum = 1;
    for (let i = 0; i <= words.length; i++) {
        if (words[i] === ' ')
sum++;
    }
    if (sum <= 10) {
        console.log(`The message was send successfully!`);
    }
    else if (sum > 10) {
        console.log(`The message is too long to be send! Has ${sum} words.`);
    }
    
}
wordCount('The one three for five six seven eight nine ten.')