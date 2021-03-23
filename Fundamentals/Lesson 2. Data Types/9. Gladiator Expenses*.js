function gladiator(a, b, c, d, e) {

    let lostFights = Number(a);
    let helmetPrice = Number(b);
    let swordPrice = Number(c);
    let shieldPrice = Number(d);
    let armorPrice = Number(e);

    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetBroken++;
        }
        if (i % 3 === 0) {
            swordBroken++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldBroken++;
        }
        if (i % 12 === 0) {
            armorBroken++;
        }
    }
    let helmet = helmetPrice * helmetBroken;
    let sword = swordPrice * swordBroken;
    let shield = shieldPrice * shieldBroken;
    let armor = armorPrice * armorBroken;
    let total = helmet + sword + shield + armor;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

}
gladiator(23, 12.50, 21.50, 40, 200)
//gladiator(7, 2, 3, 4, 5)