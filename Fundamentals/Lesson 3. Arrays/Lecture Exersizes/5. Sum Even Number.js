function sumEven(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
        let current = input[i];
        if (current % 2 === 0) {
            sum += current;
        }
    }
    console.log(sum);
}
sumEven(['2', '4', '6', '8', '10']);