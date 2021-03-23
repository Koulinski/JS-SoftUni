function sumOfNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++ ) {
        sum += Number(input[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers('1234')