function productionBis(a, b, c) {

    let monthly = Math.floor(a * b) * 20;
    let discountday = Math.floor(a * b * 0.75) * 10;
    let total = monthly + discountday;

    if (total > c) {
        let more = total - c;
        let final = (more / c) * 100;
        console.log(`You have produced ${total} biscuits for the past month.`);
        console.log(`You produce ${final.toFixed(2)} percent more biscuits.`);
    } else if (total < c) {
        let more = c - total;
        let final = (more / c) * 100;
        console.log(`You have produced ${total} biscuits for the past month.`);
        console.log(`You produce ${final.toFixed(2)} percent less biscuits.`);
    }
}
productionBis(78, 8, 16000);
//productionBis(65, 19, 6000);