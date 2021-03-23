function phoneNum(arr) {
    let validNames = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let validName = null;
    while ((validName = pattern.exec(arr)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(', '));
}
phoneNum()