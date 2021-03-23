function christmasGifts(input) {

    let childCounter = 0;
    let adultCounter = 0;
    let moneyToys = 0;
    let moneySweaters = 0;
    let toyPrice = 5;
    let sweaterPrice = 15;

    let index = 0;
    let command = input[index];

    while (command !== 'Christmas') {
        let age = Number(input[index]);
        if (age <= 16) {
            childCounter++;
            moneyToys += toyPrice;
        }
        else if (age > 16) {
            adultCounter++;
            moneySweaters += sweaterPrice;
        }
        command = input[index++];
    }
    console.log(`Number of adults: ${adultCounter}`);
    console.log((`Number of kids: ${childCounter}`));
    console.log(`Money for toys: ${moneyToys}`);
    console.log((`Money for sweaters: ${moneySweaters}`));

}
christmasGifts(['16', '20', '46', '12', '8', '20', '49', 'Christmas'])