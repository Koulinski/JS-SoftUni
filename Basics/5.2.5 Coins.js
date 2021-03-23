function coins(input) {
    let change = Number(input[0]);
    change = Math.floor(change * 100);
    let coinsHeld = 0;

    while (change > 0) {
        if (change >= 200) {
            change -= 200;
            coinsHeld++;
        }
        else if (change >= 100) {
            change -= 100;
            coinsHeld++;
        }
        else if (change >= 50) {
            change -= 50;
            coinsHeld++;
        } else if (change >= 20) {
            change -= 20;
            coinsHeld++;
        }
        else if (change >= 10) {
            change -= 10;
            coinsHeld++;
        }
        else if (change >= 5) {
            change -= 5;
            coinsHeld++;
        } else if (change >= 2) {
            change -= 2;
            coinsHeld++;
        } else if (change >= 1) {
            change -= 1;
            coinsHeld++;
        }
    }
    console.log(coinsHeld);
}
coins(['0.56'])