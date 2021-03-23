function modArr(array) {

    let numberToWorkWith = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let commandCond = array[i].split(' ');
        let comm = commandCond[0];
        let condOne = Number(commandCond[1]);
        let condTwo = Number(commandCond[2]);

        if (comm === 'swap') {
            let swap = (arr, a, b) => {
                ab = arr[a];
                arr[a] = arr[b];
                arr[b] = ab;
                return arr;
            };
            numberToWorkWith = swap(numberToWorkWith, condOne, condTwo);
        } else if (comm === 'multiply') {
            numberToWorkWith[condOne] = numberToWorkWith[condOne] * numberToWorkWith[condTwo];
        } else if (comm === 'end') {
            break;
        } else if (comm === 'decrease') {
            numberToWorkWith = numberToWorkWith.map(x => x - 1);
        }
    }
    console.log(numberToWorkWith.join(', '));
}
modArr(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);