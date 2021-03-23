function energyGel(input, inputB, inputC) {
    let fruit = String(input);
    let size = String(inputB);
    let amount = Number(inputC);
    let price = 0;
    let sum = 0;

    if (fruit === 'Watermelon') {
        switch (size) {
            case 'small':
                price = 2 * 56;
                sum += price* amount;
                break;
            case 'big':
                price = 5 * 28.7;
                sum += price* amount;
                break;
        }
    }
    if (fruit === 'Mango') {
        switch (size) {
            case 'small':
                price = 2 * 36.66;
                sum += price* amount;
                break;
            case 'big':
                price = 5 * 19.6;
                sum += price* amount;
                break;
        }
    }
    if (fruit === 'Pineapple') {
        switch (size) {
            case 'small':
                price = 2 * 42.10;
                sum += price* amount;
                break;
            case 'big':
                price = 5 * 24.80;
                sum += price* amount;
                break;
        }
    }
    if (fruit === 'Raspberry') {
        switch (size) {
            case 'small':
                price = 2 * 20;
                sum += price * amount;
                break;
            case 'big':
                price = 5 * 15.2;
                sum += price * amount;
                break;
        }
    }
    if (sum < 400) {
    console.log(`${sum.toFixed(2)} lv.`);
    } else if (sum >= 400 && sum <=1000) {
        console.log(`${(sum * 0.85).toFixed(2)} lv.`);
    } else if (sum > 1000) {
        console.log(`${(sum * 0.5).toFixed(2)} lv.`);
    }
}
energyGel('Raspberry', 'small', 50)