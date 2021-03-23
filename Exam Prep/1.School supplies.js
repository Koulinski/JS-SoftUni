function school(input, inputB, inputC, inputD) {
    let pens = Number(input);
    let markers = Number(inputB);
    let cleaner = Number(inputC);
    let discount = Number(inputD);

    let pensTotal = pens * 5.80;
    let markersTotal = markers * 7.20;
    let cleanerTotal = cleaner * 1.20;
let sum = (pensTotal + markersTotal + cleanerTotal) - (((pensTotal + markersTotal + cleanerTotal) * discount) / 100);
console.log(sum.toFixed(3));
}
school(2, 3, 2.5, 25)