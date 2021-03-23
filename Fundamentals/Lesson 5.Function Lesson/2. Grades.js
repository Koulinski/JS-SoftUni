function grades(a) {
    if (a < 3.00) {
        console.log(`Fail (2)`);
    } else if (a < 3.5) {
        console.log(`Poor (${a.toFixed(2)})`);
    } else if (a >= 3.5 && a < 4.50) {
        console.log(`Good (${a.toFixed(2)})`);
    } else if (a >= 4.5 && a < 5.50) {
        console.log(`Very good (${a.toFixed(2)})`);
    } else if (a >= 5.5) {
        console.log(`Excellent (${a.toFixed(2)})`);
    }
}
grades(4.5);