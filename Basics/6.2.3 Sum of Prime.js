function sumOfPrime(input) {
    let index = 0;
    let command = input[index++];
    let sumPrime = 0;
    let sumNotPrime = 0;

    while (command !== 'stop') {
        let number = Number(command);
        if (number < 0) {
            console.log(`Number is negative.`);
            command = input[index++];
            continue;
        }
        let isPrime = true;
        if (number === 1) {
            sumPrime += number;
            command = input[index++];
            continue;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            sumPrime += number;
        } else {
            sumNotPrime += number;
        }
        command = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}
sumOfPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])