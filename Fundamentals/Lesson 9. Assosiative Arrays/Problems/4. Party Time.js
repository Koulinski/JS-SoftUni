function partyTime(input) {
    let obj = {
        vip: [],
        reg: []
    };
    let cutHere = input.indexOf('PARTY');
    let guestList = input.splice(0, cutHere);
    let guests = input.splice(1, input.length - 1);

    guestList.forEach(el => {
        let char = el[0];
        if (isNaN(char)) {
            obj.reg.push(el)
        } else {
            obj.vip.push(el)
        }
    });

    guests.forEach(x => {
        if (Object.hasOwnProperty(obj.vip)) {
            delete obj.vip === x;
        }
    });
    // let sorted = Object.keys(obj);

    console.log(obj);
    //  console.log(sorted.length);
    //  console.log(sorted.join('\n'));
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

/* partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]); */