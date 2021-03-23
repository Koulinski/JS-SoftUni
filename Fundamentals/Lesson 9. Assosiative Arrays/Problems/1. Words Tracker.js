function wordsTracker(arr) {
    let occurances = {};
    arr.shift().split(' ').forEach(el => {
        occurances[el] = 0;
    });
    arr.forEach(w => {
        if (occurances.hasOwnProperty(w)) {
            occurances[w]++;
        }
    });
    return Object.keys(occurances)
        .sort((a, b) => occurances[b] - occurances[a])
        .map(w => `${w} - ${occurances[w]}`)
        .join('\n');
  
}console.log(
wordsTracker(['this sentence',
    'In', 'this', 'sentence',
    'you', 'have', 'to', 'count', 'the',
    'occurances', 'of', 'the', 'words', 'this', 'and',
    'sentence', 'because', 'this', 'is', 'your', 'task'
]));