function posAndNeg(input) {
    let result = [];
    for (let num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}
posAndNeg([7, -2, 8, 9]);