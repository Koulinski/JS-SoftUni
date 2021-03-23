function biggerNumber(input) {
    let bigNum = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (bigNum !== 'Stop') {
let number = Number(bigNum);
if (number > max) {
    max = number;
}
bigNum = input[index];
index++;
    }
    console.log(max);
}
biggerNumber(['100', '99', '80', '70', 'Stop'])