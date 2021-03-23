function tournament(input) {
    let index = 0;
    let day = Number(input[index++]);
    let wins = 0;
    let loses = 0;
    let moneyWon = 0;

    for (let i = 1; i <= day; i++) {
        let command = input[index++];
        let win = 0;
        let lose = 0;
        let donations = 0;
        while (command !== 'Finish') {
            let rate = input[index++];
            switch (rate) {
                case 'win':
                    win++;
                    wins++;
                    donations += 20;
                    break;
                case 'lose':
                    lose++;
                    loses++;
                    break;
                case 'Finish':
                    break;
            }
            command = input[index++];
        }
        if (win > lose) {
            donations *= 1.1;
            moneyWon += donations;
        } else {
            moneyWon += donations;
        }
    }
    if (wins > loses) {
        moneyWon*=1.2;
        console.log(`You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
    }
}
tournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])