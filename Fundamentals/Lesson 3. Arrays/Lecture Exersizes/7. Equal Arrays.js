function equalOrNot(input, inputB) {

    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }
    for (let i = 0; i < inputB.length; i++) {
        inputB[i] = Number(inputB[i]);
    }
    let areEqual = true;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        if (input[i] !== inputB[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if (areEqual)
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalOrNot(['10', '20', '30'], ['10', '20', '30']);