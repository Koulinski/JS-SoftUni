/* function gradesDescription(input) {
    if (input >= 2 && input < 3) {
        console.log(`Fail (${input})`);
    } else if (input >= 3.00 && input < 3.5) {
        console.log(`Poor`);
    } else if (input >= 3.5 && input < 4.5) {
        console.log(`Good`);
    } else if (input >= 4.5 && input < 5.5) {
        console.log(`Very good`);
    } else if (input >= 5.5 && input <= 6) {
        console.log(`Excellent`);
    }
}
gradesDescription(2.5) */

function power(input, inputB) {
console.log(Math.pow(input, inputB));
}
power(3, 4);

/* function readFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const fullName = readFullName('John', 'Smith');
console.log(fullName); */


/* function mathem(a, b, operator) {

    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case 'subtract':
            let subtrack = (a, b) => a - b;
            console.log(subtrack(a, b));
            break;
    }
}
mathem(5, 10, 'devide') */


/* function posOrNeg(a, b, c) {
    let result = '';
    if (a >= 0 && b >= 0 && c >= 0) {
        result = 'Positive';
    } else if (a < 0 && b < 0 && c >= 0) {
        result = 'Positive'
    } else if (a < 0 && c < 0 && b >= 0) {
        result = 'Positive';
    } else if (b < 0 && c < 0 && a >= 0) {
        result = 'Positive';
    } else if (a === 0 || b === 0 || c == 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    console.log(result);
}
posOrNeg(-1, 0, 1) */