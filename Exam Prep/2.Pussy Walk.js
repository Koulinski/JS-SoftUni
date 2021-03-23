function pussyWalk(input, inputB, inputC) {
    let minutesOfWalk = Number(input);
    let numOfWalks = Number(inputB);
    let calloriesIntake = Number(inputC);

    let totalWalkTime = minutesOfWalk * numOfWalks;
    let calloryBurn = totalWalkTime * 5;
    let goal = calloriesIntake * 0.5;
    if (calloryBurn >= goal) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${calloryBurn}.`);

    } else {
        console.log(`No, the walk for your cat is not enough. Burend calories per day: ${calloryBurn}.`);
    }
}
pussyWalk(15, 2, 500)