function lilly(input, inputB, inputC) {
    let age = Number(input);
    let priceOfWashingMachine = Number(inputB);
    let priceOfASingleToy = Number(inputC);
    let sumOfMoneyRecieved = 0;
    let toyMoney = 0;
    let money = 10;
    let totalSum = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sumOfMoneyRecieved += (money -1);
            money +=10;
        } else {
            toyMoney += priceOfASingleToy;
        }
    }
    totalSum = sumOfMoneyRecieved + toyMoney;
    if (totalSum >= priceOfWashingMachine) {
        console.log(`Yes! ${(totalSum - priceOfWashingMachine).toFixed(2)}`);
    } else if (priceOfWashingMachine > totalSum) {
        console.log(`No! ${(priceOfWashingMachine - totalSum).toFixed(2)}`);
    }
}
lilly('21', '1570.98', '3')