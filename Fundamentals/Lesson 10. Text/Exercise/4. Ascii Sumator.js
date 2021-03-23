function asciiSum([first, second, str]) {
    let string = [];
    str = str.split('').forEach(el => {
        string.push(el.charCodeAt());
    });
    if (first.charCodeAt() < second.charCodeAt()) {
        string = string.filter(value => value > first.charCodeAt() && value < second.charCodeAt());
    } else {
       string = string.filter(value => value > second.charCodeAt() && value < first.charCodeAt());
    }
    
    console.log(string.reduce((a, b) => a + b));
}
asciiSum(['.', '@', 'dsg12gr5653feee5']);

 asciiSum(['?', 'E', '@ABCEF']);

 asciiSum(['a', '1', 'jfe392$#@j24ui9ne#@$']);