function print(input, inputB) {
    let num = Number(input);
    let nums = Number(inputB);

    let line = '';
    let sum = 0;

    for (let i = num; i <= nums; i++) {
        line+= i + ' ';
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
print(5, 10);