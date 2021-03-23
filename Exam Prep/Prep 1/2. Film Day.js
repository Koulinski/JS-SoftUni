function filmDay(input, inputB, inputC) {
    let timeForFilming = Number(input);
    let scenes = Number(inputB);
    let sceneTime = Number(inputC);

    let prep = timeForFilming * 0.15;
    let time = sceneTime * scenes;
    let total = prep + time;

    if (total > timeForFilming) {
        console.log(`Time is up! To complete the movie you need ${Math.round(total - timeForFilming)} minutes.`);
    }
    else if (total <= timeForFilming) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForFilming - total)} minutes left!`);
    }
}
filmDay('60', '15', '3')