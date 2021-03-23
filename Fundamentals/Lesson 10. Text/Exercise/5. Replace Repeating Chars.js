function subString(str) {
    let result = '';
    for (const char of str) {
        if (char !== result[result.length - 1]) {
            result += char;
        }
    }
    return result;
}
console.log(subString('aaaabbcccdeedsssaaa'));