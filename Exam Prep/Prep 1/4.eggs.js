function eggColoring(input) {
    let numberOfEggs = Number(input.shift());
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    let totalEggs = 0;
    //  let colorRed = 0;
    //  let colorOrange = 0;
    //  let colorBlue = 0;
    //  let colorGreen = 0;

    for (let i = 1; i <= numberOfEggs; i++) {
        let eggs = String(input.shift());
        if (eggs === 'red') {
            redEggs++;
        }
        if (eggs === 'orange') {
            orangeEggs++;
        }
        if (eggs === 'blue') {
            blueEggs++;
        }
        if (eggs === 'green') {
            greenEggs++;
        }
    }
    totalEggs = redEggs + blueEggs + greenEggs + orangeEggs;
    let maxEggs = Math.max(redEggs, orangeEggs, blueEggs, greenEggs);
    if (maxEggs === redEggs) {
        eggColors = 'red';
    }
    if (maxEggs === greenEggs) {
        eggColors = 'green';
    }
    if (maxEggs === blueEggs) {
        eggColors = 'blue'
    }
    if (maxEggs === orangeEggs) {
        eggColor = 'orange'
    }
    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${eggColors}`);
}
eggColoring(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green'])