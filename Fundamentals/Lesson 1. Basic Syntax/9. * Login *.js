function login(input) {

    let username = input.shift();
    let password = username.split('').reverse().join('');
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        if (i >= 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (input[i] === password) {
            console.log(`User ${username} logged in.`);
        } else {
            counter++;
            console.log(`Incorrect password. Try again.`);
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);