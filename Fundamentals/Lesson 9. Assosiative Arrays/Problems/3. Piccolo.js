function parking(input) {
    let obj = {};
    for (let el of input) {
        let [pos, num] = el.split(', ');
        //console.log(num);
        if (pos === 'IN') {
            obj[num] = 0;;
        } else if (pos === 'OUT') {
            if (obj.hasOwnProperty(num)) {
                delete obj[num];
            }
        }
    }
    let sorted = Object.keys(obj)
        .sort((a, b) => a.localeCompare(b)).join(' \n');
    if (sorted.length <= 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        console.log(sorted);
    }
}
parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);