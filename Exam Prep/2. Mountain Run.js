function mountainRun(input, inputB, inputC) {
    let recordToBeat = Number(input);
    let distance = Number(inputB);
    let secondsPerMinute = Number(inputC);


    let georgeTime = distance * secondsPerMinute;
    let delay = (distance / 50);
    let fastTime = Math.floor(delay) * 30;
    let total = georgeTime + fastTime;
    //console.log(georgeTime);
    if (total < recordToBeat) {
        console.log(`Yes! The new record is ${(total).toFixed(2)} seconds.`);
    }
    else if (total >= recordToBeat) {
        console.log(`No! He was ${(total - recordToBeat).toFixed(2)} seconds slower.`);
    }
}
mountainRun(5554.36, 1340, 3.23)
