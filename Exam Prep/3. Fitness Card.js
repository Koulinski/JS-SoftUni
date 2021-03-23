function gymMembership(input, inputB, inputC, inputD) {
    let moneyHave = Number(input);
    let sex = String(inputB);
    let age = Number(inputC);
    let type = String(inputD);
    let price = 0;

    if (type === 'Gym') {
        switch (sex) {
            case 'm':
                price = 42;
                break;
            case 'f':
                price = 35;
                break;
        }
    }
    if (type === 'Boxing') {
        switch (sex) {
            case 'm':
                price = 41;
                break;
            case 'f':
                price = 37;
                break;
        }
    }
    if (type === 'Yoga') {
        switch (sex) {
            case 'm':
                price = 45;
                break;
            case 'f':
                price = 42;
                break;
        }
    }
    if (type === 'Zumba') {
        switch (sex) {
            case 'm':
                price = 34;
                break;
            case 'f':
                price = 31;
                break;
        }
    }
    if (type === 'Dances') {
        switch (sex) {
            case 'm':
                price = 51;
                break;
            case 'f':
                price = 53;
                break;
        }
    }
    if (type === 'Pilates') {
        switch (sex) {
            case 'm':
                price = 39;
                break;
            case 'f':
                price = 37;
                break;
        }
    }
    if (age <= 19) {
        price = price * 0.8;
        price = price.toFixed(2);
    }
    if (price <= moneyHave) {
        console.log(`You purchased a 1 month pass for ${type}.`);
    }
    else if (price > moneyHave) {
        console.log(`You don't have enough money! You need $${(price-moneyHave).toFixed(2)} more.`);
    }
}
gymMembership(10, 'm', 50, 'Pilates');