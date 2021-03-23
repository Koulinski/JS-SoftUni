function revealWords(word, text) {
    let words = word.split(', ');
    let rate = text.split(' ');

    for (let el of rate) {
        let ind = rate.indexOf(el);
        if (el.startsWith('*')) {
            for (let w of words) {
                if (el.length === w.length) {
                   rate.splice(ind,1, w);
                }
            }
        }
    }
     console.log(rate.join(' '));
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')
//console.log(revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'));