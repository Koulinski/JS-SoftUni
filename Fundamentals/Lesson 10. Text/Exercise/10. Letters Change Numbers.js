function lettersNumber(str) {
    let sum = 0;
    let string = str.split(' ').filter(x => x.length > 1);
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    upper = c => c.toLowerCase().split('').map(x => alphabet.indexOf(x) + 1);
    lower = c => c.split('').map(x => alphabet.indexOf(x) + 1);

    for (let el of string) {
        let calc = 0;
        let firstLetter = el[0];
        let lastLetter = el[el.length - 1];
        let number = el.substring(1, el.length - 1);

        if (firstLetter === firstLetter.toUpperCase()) {
            calc = number / Number(upper(firstLetter));
        } else {
            calc = number * Number(lower(firstLetter));
        }
        if (lastLetter === lastLetter.toLowerCase()) {
            calc += Number(lower(lastLetter));
        } else {
            calc -= Number(upper(lastLetter));
        }
        sum += calc;
    }
    return sum.toFixed(2);
}
console.log(lettersNumber('P34562Z q2576f   H456z'));
//lettersNumber('A12b s17G');
lettersNumber('P34562Z q2576f   H456z');
//lettersNumber('a1A');