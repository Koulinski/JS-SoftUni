function vacation(input, inputB, inputC) {

    let amount = Number(input);
    let group = String(inputB);
    let day = String(inputC);

    let price = 0;
    let discount = 0;

    if (day === 'Friday') {
        if (group === 'Students') {
            price = 8.45;
        } else if (group === 'Business') {
            price = 10.9;
        } else if (group === 'Regular') {
            price = 15;
        }
    } else if (day === 'Saturday') {
        if (group === 'Students') {
            price = 9.8;
        } else if (group === 'Business') {
            price = 15.6;
        } else if (group === 'Regular') {
            price = 20;
        }
    } else if (day === 'Sunday') {
        if (group === 'Students') {
            price = 10.46;
        } else if (group === 'Business') {
            price = 16;
        } else if (group === 'Regular') {
            price = 22.5;
        }
    }

    let totalprice = amount * price;
    let finalPrice = 0;
    if (group === 'Students' && amount >= 30) {
        finalPrice = totalprice * 0.85;
    } else if (group === 'Business' && amount >= 100) {
        finalPrice = (amount - 10) * price;
    } else if (group === 'Regular' && amount >= 10 && amount <= 20) {
        finalPrice = totalprice * 0.95;
    }
    else {
        finalPrice = totalprice;
    }

    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}
vacation(30, 'Students', 'Sunday');