function compStore(array) {

    let priceNoTax = 0;
    let tax = 0;
    let discount = 0;
    let finalPrice = 0;

    for (const el of array) {

        if (el === 'special') {
            tax = priceNoTax * 0.2;
            priceNoTax = priceNoTax + tax;
            discount = priceNoTax * 0.1;
            finalPrice = priceNoTax - discount;
        } else if (el === 'regular') {
            tax = priceNoTax * 0.2;
            priceNoTax = priceNoTax + tax;
            finalPrice = priceNoTax;
        } else if (el !== 'special' || el !== 'regular') {
            let num = Number(el);
            if (num > 0) {
                priceNoTax += num;
            } else {
                console.log(`Invalid price!`);
            }
        }
    }

    if (finalPrice > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${(priceNoTax-tax).toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    } else {
        console.log(`Invalid order!`);
    }
}
compStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
// compStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
// compStore(['regular']);