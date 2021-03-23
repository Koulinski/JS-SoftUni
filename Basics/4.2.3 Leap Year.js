function leapYear(input, inputB) {
    let first = Number(input);
    let second = Number(inputB);
    for (let i=first; i<= second; i++) {
        if (i% 4 === 0) {
            console.log(i);
        }
    }
}
leapYear(2020, 2032)