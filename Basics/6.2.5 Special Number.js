function special(input) {
    let specialNum = Number(input[0]);
    let spec = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let h = 1; h <= 9; h++) {
                for (let k = 1; k <= 9; k++) {
                    if (specialNum % i === 0 && specialNum % j === 0 && specialNum % h === 0 && specialNum % k === 0) {
spec+= '' + i + j + h + k + ' ';
                    }
                }
            }
        }
    }
    console.log(spec);
}
special(['3'])