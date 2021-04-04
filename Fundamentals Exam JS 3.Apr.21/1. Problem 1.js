function firstProblem(arr) {
    let userName = arr.shift();

    while (arr[0] !== 'Sign up') {
        let [comm, task, task2] = arr.shift().split(' ');

        if (comm === 'Case') {
            if (task === 'lower') {
                userName = userName.toLowerCase();
                console.log(userName);
            } else if (task === 'upper') {
                userName = userName.toUpperCase();
                console.log(userName);
            }
        } else if (comm === 'Reverse') {
            let validation = Number(task) >= 0 && Number(task2) <= userName.length;
            //let secondVal = Number(task2) >= 0 && Number(task2) <= userName.length;
            if (validation) {
                // let reversestr = userName.split('').splice(task, task2).reverse().join('');
                task2 = Number(task2) + 1;
                let reversestr = userName.substring(task, (task2)).split('').reverse().join('')
                console.log(reversestr);
            }
        } else if (comm === 'Cut') {
            if (userName.includes(task)) {
                let reg = new RegExp(task);
                userName = userName.replace(reg, '');
                console.log(userName);
            } else {
                console.log(`The word ${userName} doesn't contain ${task}.`);
            }
        } else if (comm === 'Replace') {
            if (userName.includes(task)) {
                let reg = new RegExp(task, 'g');
                userName = userName.replace(reg, '*');
                console.log(userName);
            }
        } else if (comm === 'Check') {
            if (userName.includes(task)) {
                console.log(`Valid`);
            } else {
                console.log(`Your username must contain ${task}.`);
            }
        }
    }
}
/* firstProblem(["Peter",
    "Case lower",
    "Cut ES",
    "Check @",
    "Sign up"
]); */

firstProblem(["ThisIsMyString",
    "Reverse 1 4",
    "Replace i",
    "Cut My",
    "Sign up"
]);