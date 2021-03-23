function smallerNumber(input) {
    let smaller = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (smaller !== 'Stop') {
        let number = Number(smaller);
        if (number < min) {
            min = number;
        }
        smaller = input[index];
        index++;
    }
    console.log(min);
}
smallerNumber(['-10', '20', '-30', 'Stop'])