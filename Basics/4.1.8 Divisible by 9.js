function divisible(input, inputB) {
    let number = Number(input);
    let number2 = Number(inputB);
    let sum = 0;
    let output = '';
    for (let i = number; i <= number2; i++) {
        if (i % 9 === 0) {
            sum += i;
            output += i + ' ';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output);
}
divisible('100', '200')