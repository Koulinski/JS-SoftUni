function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneyHave = Number(input[index]);
    index++;

    let counterSpend = 0;
    let daysPast = 0;

    while (moneyHave < moneyNeeded) {
        let command = input[index];
        index++;
        sum = Number(input[index]);
        index++;
        switch (command) {
            case 'spend':
                counterSpend++;
                moneyHave -= sum;
                if (moneyHave < 0) {
                    moneyHave = 0;
                }
                break;
            case 'save':
                counterSpend = 0;
                moneyHave += sum;
                break;
        }
        daysPast++;
        if (counterSpend === 5) {
            break;
        }


    }
    if (moneyHave >= moneyNeeded) {
        console.log(`You saved the money for ${daysPast} days.`);
    }
    else {
        console.log(`You can't save the money.`);
        console.log(daysPast);
    }
}
vacation(['2000', '1000', 'spend', '1200', 'save', '2000'])