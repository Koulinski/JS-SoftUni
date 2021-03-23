function combo(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let sum = 0;
    let isFound = false;
    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            sum++;
            if (i + j === magicNum) {
                console.log(`Combination N:${sum} (${i} + ${j} = ${i + j})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
        
    }
    if (isFound !== true) {
        console.log(`${sum} combinations - neither equals ${magicNum}`);
    }
}
combo(['23', '24', '20'])