function beerAndChips(input, inputB, inputC, inputD) {
let name = String(input);
let budget = Number(inputB);
let beers = Number(inputC);
let chips = Number(inputD);

let beerPrice = 1.2;
let chipsPrice = (beers * beerPrice) * 0.45;
let totalChips = chipsPrice * chips;
totalChips = Math.ceil(totalChips);
let totalBeersPrice = beerPrice * beers;
let total = totalChips + totalBeersPrice;

if (budget >= total) {
console.log(`${name} bought a snack and has ${(budget-total).toFixed(2)} leva left.`);
}
else {
    console.log(`${name} needs ${(total-budget).toFixed(2)} more leva!`);
}
}
beerAndChips('George', '5', '2', '4');