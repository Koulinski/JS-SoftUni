function catFood(input) {
    let numberCats = Number(input.shift());
    let totalFoodEaten = 0;
    let smallCounter = 0;
    let midCounter = 0;
    let bigCounter = 0;
    let pricePerKilo = 12.45;

    for (let i = 1; i <= numberCats; i++) {
        let food = Number(input.shift());
        if (food >= 100 && food < 200) {
            smallCounter++;
            totalFoodEaten += food;
        }
        else if (food >= 200 && food < 300) {
            midCounter++;
            totalFoodEaten += food;
        }
        else if (food >= 300 && food < 400) {
            bigCounter++;
            totalFoodEaten += food;
        }
    }
    let foodIntoKilo = totalFoodEaten / 1000;
    let totalPrice = foodIntoKilo * pricePerKilo;
    // totalPrice = 
    console.log(`Group 1: ${smallCounter} cats.`);
    console.log(`Group 2: ${midCounter} cats.`);
    console.log(`Group 3: ${bigCounter} cats.`);
    console.log(`Price for food per day: ${totalPrice.toFixed(2)} lv.`);
}
catFood(['6', '102', '236', '123', '399', '342', '222'])