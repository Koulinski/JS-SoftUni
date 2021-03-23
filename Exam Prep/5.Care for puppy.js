function care(input) {
    let index = 0;
    let availableFood = Number(input[index++]);
    availableFood = availableFood * 1000;
    let foodCounter = 0;
    let command = input[index++];

    while (command !== 'Adopted') {
        let food = Number(command);
        foodCounter += food;
        command = input[index++];
    }
    if (foodCounter <= availableFood) {
        console.log(`Food is enough! Leftovers: ${availableFood - foodCounter} grams.`);
    }
    else if (foodCounter > availableFood) {
        console.log(`Food is not enough. You need ${foodCounter - availableFood} grams more.`);
    }
}
care(['3', '1000', '1000', '1000', 'Adopted'])