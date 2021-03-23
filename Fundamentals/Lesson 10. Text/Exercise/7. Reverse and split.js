function reverseAndSplit(input) {
    let text = input.split('').reverse().join('');
    console.log(text.slice(input.length / 2, input.length));
    console.log(text.slice(0, (input.length / 2)));
}
reverseAndSplit('tluciffiDsIsihTgnizamAoSsIsihT');


/* function reverseAndSplit(input) {
    if (input === '')
        return '';
    else
        return reverseAndSplit(input.substr(1)) + input.charAt(0);
}
console.log(
    reverseAndSplit('tluciffiDsIsihTgnizamAoSsIsihT')
); */