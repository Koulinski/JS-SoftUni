function matchNames(arr) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while ((validName = pattern.exec(arr)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}
matchNames([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]);