function shooting(array) {
    let targets = array.shift().split(' ').map(Number);
    let count = 0;
    let isShot = (current) => current === -1;
    let isInside = (index, arr) => index >= 0 && index < arr.length;

    for (let comm of array) {

        if (comm === 'End') {
            break;
        }
        let index = Number(comm);
        if (isInside(index, targets) && !isShot(targets[index])) {
            let value = targets[index];
            targets[index] = -1;
            targets = targets.map((current) => {
                if (!isShot(current)) {
                    if (current > value) {
                        current -= value;
                    } else {
                        current += value;
                    }
                }
                return current;
            });
            count++;
        }
    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}
shooting(['24 50 36 70', '0', '4', '3', '1', 'End']);
// shooting(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);