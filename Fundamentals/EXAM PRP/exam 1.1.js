function productionBis(a, b, c) {

    let bisPerDay = a;
    let employess = b;
    let comp = c;

    

    //console.log(`You have produced ${total} biscuits for the past month.`);

    if (total > c) {
        let more = total - c;
        let final = (more / c) * 100;
        console.log(`You have produced ${total} biscuits for the past month.`);
        console.log(`You produce ${final.toFixed(2)} percent more biscuits.`);
    } else {
        let more = c - total;
        let final = (more / c) * 100;
        console.log(`You have produced ${total} biscuits for the past month.`);
        console.log(`You produce ${final.toFixed(2)} percent less biscuits.`);
    }
}
productionBis(78, 8, 16000);