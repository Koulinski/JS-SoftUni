function calc(a, b, c) {

    let num1 = Number(a);
    let operator = String(b);
    let num2 = Number(c);

    if (operator === '+') {
        console.log((num1 + num2).toFixed(2));
    } else if (operator === '-') {
        console.log((num1 - num2).toFixed(2));
    } else if (operator === '*') {
        console.log((num1 * num2).toFixed(2));
    } else if (operator === '/') {
        console.log((num1 / num2).toFixed(2));
    }

}
calc(5, '/', 10)