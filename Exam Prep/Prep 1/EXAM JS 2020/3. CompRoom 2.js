function compRoom(input, inputB, inputC, inputD) {
    let month = String(input);
    let hoursSpend = Number(inputB);
    let numberOfPeople = Number(inputC);
    let timeOfDay = String(inputD);
    let price = 0;

    switch (month) {
        case 'march':
        case 'april':
        case 'may':
            if (timeOfDay === 'day') {
                price = 10.50;
                if (numberOfPeople >= 4) {
                    price = price * 0.9;
                    if (hoursSpend >= 5) {
                        price = price * 0.5;
                    }
                }
            }
            if (timeOfDay === 'night') {
                price = 8.40;
                if (numberOfPeople >= 4) {
                    price = price * 0.9;
                    if (hoursSpend >= 5) {
                        price = price * 0.5;
                    }
                }
            }
            break;

        case 'june':
        case 'july':
        case 'august':
            if (timeOfDay === 'day') {
                price = 12.6;
                if (numberOfPeople >= 4) {
                    price = price * 0.9;
                    if (hoursSpend >= 5) {
                        price = price * 0.5;
                    }
                }
            }
            if (timeOfDay === 'night') {
                price = 10.2;
                if (numberOfPeople >= 4) {
                    price = price * 0.9;
                    if (hoursSpend >= 5) {
                        price = price * 0.5;
                    }
                }
            }
            break;
    }
    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${((price * hoursSpend) * numberOfPeople).toFixed(2)}`);
}
compRoom('july', '5', '5', 'night');