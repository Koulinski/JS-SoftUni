function subStr(a, b) {
    b = b.toLowerCase().split(' ');
    if (b.includes(a)) {
        return a;
    }
    return `${a} not found!`;
}
console.log(subStr('javascript', 'javascript is awesome'));