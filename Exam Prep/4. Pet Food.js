function petFood(input) {
    let days = Number(input.shift());
    let totalFood = Number(input.shift());
    let dogFood = 0;
    let catFood = 0;
    let counter = 0;
    let bonus = 0;
    for (let i = 1; i <= days; i++) {
        let Dogsfood = Number(input.shift());
        dogFood += Dogsfood;
        let Catsfood = Number(input.shift());
        catFood += Catsfood;
        counter++;
        if (counter % 3 === 0) {
            bonus += (Dogsfood + Catsfood) * 0.1;
        }
    }
    bonus = Math.round(bonus);
    console.log(`Total eaten biscuits: ${bonus}gr.`);
    console.log(`${(((dogFood + catFood) / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFood / (dogFood + catFood)) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood / (dogFood + catFood)) * 100).toFixed(2)}% eaten from the cat.`);
}
petFood(['3', '500', '100', '30', '110', '25', '120', '35'])