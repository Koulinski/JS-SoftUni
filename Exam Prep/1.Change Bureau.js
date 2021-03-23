function changeBureau(input, inputB, inputC) {
    let bitcoin = Number(input);
    let yuan = Number(inputB);
    let commution = Number(inputC);
    
    let dollar = 1.76;
    let euro = 1.95;
    let sum = 0;

let bitcoinLev = bitcoin * 1168;
let yuantoDollar = yuan * 0.15;

let dollarToLev = yuantoDollar * dollar;
sum = ((bitcoinLev + dollarToLev) / euro);
let commition = (sum - ((sum / 100) * commution));
console.log(commition.toFixed(2));
}
changeBureau(20, 5678, 2.4)