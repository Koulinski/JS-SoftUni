function loadingBar(n) {

    function fullRow(n) {
        return '%'.repeat(n / 10);
    }

    function emptyRow(n) {
        return '.'.repeat(10 - n / 10);
    }

    let result = '';
    if (n === 100) {
        result = `100% Complete!\n` + `[${fullRow(n)}]`;
    } else {
        result = `${n}% [${fullRow(n)}${emptyRow(n)}]\nStill loading...`;
    }
    return result;
}
let result = loadingBar(25);
console.log(result);