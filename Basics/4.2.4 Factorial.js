function factorial(input) {
    let number = Number(input);
    let sum = 1;
    for (let i = 2; i <= number; i++) {
sum *= i;
    }
    console.log(sum);
}
factorial(4)