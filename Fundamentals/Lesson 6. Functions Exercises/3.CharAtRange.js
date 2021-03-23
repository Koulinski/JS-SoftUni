function charAtRange(x, y) {

    let line = '';
    let first = x.charCodeAt();
    let second = y.charCodeAt();

    let charAtLine = (a, b) => {
        for (let index = a + 1; index < b; index++) {
            line += String.fromCharCode(index) + ' ';
        }
        return line;
    }
    return first > second ? charAtLine(second, first) : charAtLine(first, second);
}
let result = charAtRange('a', 'd');
console.log(result);

97, 100