function passReset(arr) {
    let password = arr.shift();

    while (arr[0] !== 'Done') {
        let [comm, first, second] = arr.shift().split(' ');

        if (comm === 'TakeOdd') {
            password = password.split('').filter((char, i) => i % 2 !== 0).join('');
            console.log(password);
        } else if (comm === 'Cut') {
            first = Number(first);
            second = Number(second);
            let cut = password.substring(first, first + second);
            password = password.replace(cut, '');
            console.log(password);
        } else if (comm === 'Substitute') {
            
            if (password.includes(first)) {
                let reg = new RegExp(first, 'g');
                password = password.replace(reg, second);
                // password = password.split(first).join(second);
                // without using RegExp
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }

        }
    }
    console.log(`Your password is: ${password}`);
}
/* passReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]); */

passReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]);