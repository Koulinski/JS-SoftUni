function sumOfDigits (input) {

    let digits = input;
    digits = digits.toString();
    let sum = 0;

for (let i =0; i<digits.length; i++) {
    sum += Number(digits[i]);
}
console.log(sum);
}
sumOfDigits('245678')