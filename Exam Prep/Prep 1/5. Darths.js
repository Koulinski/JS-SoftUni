function darths(input) {
    //
    let name = input[0];
    let successfulShotCounter = 0;
    let unsuccessfulShotCounter = 0;
    let scoreCounter = 301;
    let index = 1;
    let command = input[index++];
    let sum = Number(input[index++]);

    while (command !== 'Retire') {
      //  let type = command;
     //   let sum = Number(input[index++]);
        switch (command) {
            case 'Single':
                successfulShotCounter++;
                scoreCounter -= sum;
                if (scoreCounter < 0) {
                    successfulShotCounter--;
                    unsuccessfulShotCounter++;
                    scoreCounter += sum;
                }
                break;
            case 'Double':
                successfulShotCounter++;
                scoreCounter -= sum * 2;
                if (scoreCounter < 0) {
                    successfulShotCounter--;
                    unsuccessfulShotCounter++;
                    scoreCounter += sum * 2;
                }
                break;
            case 'Triple':
                successfulShotCounter++;
                scoreCounter -= sum * 3;
                if (scoreCounter < 0) {
                    successfulShotCounter--;
                    unsuccessfulShotCounter++;
                    scoreCounter += sum * 3;
                }
                break;
        }
        if (scoreCounter == 0) {
            break;
        }
        if (command === 'Retire') {
            break;
        }
        command = input[index++];

    }
    if (scoreCounter === 0) {
        console.log(`${name} won the leg with ${successfulShotCounter} shots.`);
    }
    else if (command === 'Retire') {
        console.log(`${name} retired after ${unsuccessfulShotCounter} unsuccessful shots.`);
    }
}
darths(['Pesho', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Double', '20', 'Triple', '20', 'Double', '5', 'Triple', '10', 'Double', '6', 'Retire'])