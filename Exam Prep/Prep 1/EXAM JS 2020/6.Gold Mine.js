function goldMine(input) {

    let locations = Number(input[0]);
    let index = 1;
    for (let i = 1; i <= locations; i++) {
        let sum = 0;
        let averageExpected = Number(input[index++]);
        let days = Number(input[index++]);

        for (let j = 1; j <= days; j++) {
            let gold = Number(input[index]);
            sum += gold;
            gold = input[index++];
        }
        let averageSum = sum / days;
        if (averageExpected <= averageSum) {
            console.log(`Good job! Average gold per day: ${(averageSum).toFixed(2)}.`);
        }
        else if (averageExpected > averageSum) {
            console.log(`You need ${(averageExpected - averageSum).toFixed(2)} gold.`);
        }
    }
}

goldMine(['2', '10', '3', '10', '10', '11', '20', '2', '20', '10'])
// goldMine(['1', '5', '3', '10', '1', '3', '20', '2', '20', '10'])