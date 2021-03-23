function rounding(input, inputB) {
let firstNumber = Number (input);
let decimal = Number(inputB);
if (decimal > 15) {
    decimal = 15;
}

console.log(parseFloat(firstNumber.toFixed(decimal)));
}
rounding(3.12345678910121314151617 , 16);