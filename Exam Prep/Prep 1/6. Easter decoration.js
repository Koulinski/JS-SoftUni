function purchases(input) {
    let index = 0;
    let customerNumber = Number(input[index++]);
    let basket = 1.5;
    let wreath = 3.8;
    let chocolateBynny = 7;
    let priceTotal = 0;
    let counter = 0;
    let average = 0;

    for (let i = 1; i <= customerNumber; i++) {
        let command = input[index];

        while (command !== 'Finish') {
            let purchase = input[index];
            switch (purchase) {
                case 'basket':
                    counter++;
                    priceTotal += basket;
                    break;
                case 'wreath':
                    counter++;
                    priceTotal += wreath;
                    break;
                case 'chocolate bunny':
                    counter++;
                    priceTotal += chocolateBynny;
                    break;
            }
            command = input[index++];
        }
        if (counter % 2 === 0) {
            let discount = priceTotal * 0.2;
            priceTotal = priceTotal - discount;
        }
        average += priceTotal;
        console.log(`You purchased ${counter} items for ${priceTotal.toFixed(2)} leva.`);

        priceTotal = 0;
        counter = 0;
    }
    if (customerNumber > 1) {
        average = average / customerNumber;
    }
    console.log(`Average bill per client is: ${average.toFixed(2)} leva.`);
}
purchases(['2', 'basket', 'wreath', 'chocolate bunny', 'Finish', 'wreath', 'chocolate bunny', 'Finish']);