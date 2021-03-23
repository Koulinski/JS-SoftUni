function vacation(input, inputB, inputC) {
    let destination = String(input);
    let dates = String(inputB);
    let nights = Number(inputC);
    let price = 0;

    switch (destination) {
        case 'France':
            if (dates === '21-23') {
                price = nights * 30;
            }
            if (dates === '24-27') {
                price = nights * 35;
            }
            if (dates === '28-31') {
                price = nights * 40;
            }
            break;
        case 'Italy':
            if (dates === '21-23') {
                price = nights * 28;
            }
            if (dates === '24-27') {
                price = nights * 32;
            }
            if (dates === '28-31') {
                price = nights * 39;
            }
            break;
        case 'Germany':
            if (dates === '21-23') {
                price = nights * 32;
            }
            if (dates === '24-27') {
                price = nights * 37;
            }
            if (dates === '28-31') {
                price = nights * 43;
            }
            break;
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}
vacation('Germany', '24-27', '5');