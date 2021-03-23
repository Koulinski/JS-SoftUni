function plainLoad(input) {
    let index = 0;
    let plainCapacity = Number(input[index++]);
    let currentLoad = 0;
    let command = input[index++];
    while (command !== 'End') {
        let load = Number(command);
        currentLoad++;
        if (currentLoad % 3 === 0) {
            load = (load * 0.1) + load;
        }
        plainCapacity -= load;

        if (plainCapacity <= 0) {
            console.log(`No more space!`);
            break;
        }
        command = input[index++];
    }
    if (plainCapacity <= 0) {
        console.log(`Statistic: ${(currentLoad - 1)} suitcases loaded.`);
    }
    else if (plainCapacity > 0) {
        console.log('Congratulations! All suitcases are loaded!');
        console.log(`Statistic: ${(currentLoad)} suitcases loaded.`);
    }
}
plainLoad(['550', '100', '252', '72', 'End'])