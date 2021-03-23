function exam(arr) {
    let array = arr.map(Number);
    let days = array.shift();
    let players = array.shift();
    let groupEnergy = array.shift();
    let h2o = array.shift();
    let food = array.shift();
    let totalWater = days * players * h2o;
    let totalFood = days * players * food;
    let water = totalWater;
    let snacks = totalFood;


    for (let i = 1; i <= days; i++) {
        let loss = array.shift();
        groupEnergy -= loss;

        if (groupEnergy <= 0) {
            break;
        }
        if (i % 2 === 0) {
            groupEnergy *= 1.05;
            water = water - (water * 0.3);
        }
        if (i % 3 === 0) {
            snacks = snacks - (snacks / players);
            groupEnergy = groupEnergy + (groupEnergy * 0.1);
        }
    }
    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${snacks.toFixed(2)} food and ${water.toFixed(2)} water.`);
    }
}
/* exam(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"
]); */

exam(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"
])