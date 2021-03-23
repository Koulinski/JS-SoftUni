function moonWalk(input, inputB) {
    let distance = 384400;
    let averageSpeed = Number(input);
    let fuelPer100km = Number(inputB);

    let voege = distance *2;
    let time = voege / averageSpeed;
    time = Math.ceil(time);
    let totalTime = time + 3;
    let fuel = (fuelPer100km * voege) / 100;

    console.log(totalTime);
    console.log(fuel);

}
moonWalk('15000', '4')