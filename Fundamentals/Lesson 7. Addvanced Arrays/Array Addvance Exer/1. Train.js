function wagon(array) {
    let paxWagons = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());


    for (let i = 0; i < array.length; i++) {
        let addWagonOrPax = array[i].split(' ');
        let add = addWagonOrPax[0];
        let amount = addWagonOrPax[1];

        if (addWagonOrPax.length === 2 && add === 'Add') {
            paxWagons.push(amount);
        } else {
            let pax = Number(addWagonOrPax[0]);
            for (let j = 0; j < paxWagons.length; j++) {
                if (pax + paxWagons[j] <= capacity) {
                    paxWagons[j] += pax;
                    break;
                }
            }
        }
    }
    console.log(paxWagons.join(' '));
}
//let result = wagon(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
/* let result = */
wagon(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
//console.log(result);
//72 54 21 12 4 75 23 10 0
