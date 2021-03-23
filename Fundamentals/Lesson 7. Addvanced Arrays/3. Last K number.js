function lastKNum(a, b) {
    let result = [1];
    for (let current = 1; current < a; current++) {
        let start = Math.max(0, current - b);
        let end = result.slice(start, current);
        let sum = 0;
        for (let j = 0; j < end.length; j++) {
            sum += end[j];
        }
        result[current] = sum;
    }

    console.log(result.join(' '));

}
lastKNum(6, 3);