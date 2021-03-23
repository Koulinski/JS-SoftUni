/* /* function rep(a, b) {
    let newStr = '';
    for (let index = 0; index < b; index++) {
        newStr += a;
    }
    console.log(newStr);
}/*  */


function rep(a,b) {
    console.log(`${a.repeat(b)}`);
}
rep('abc', 3)