function training(input) {
    let tax = Number(input);

    let shoes = tax * 0.6;
    let cloths = shoes * 0.8;
    let ball = cloths * 0.25;
    let accessories = ball * 0.2;
    let total = tax + shoes + cloths + ball + accessories;
    console.log(total.toFixed(2));
}
training('230');