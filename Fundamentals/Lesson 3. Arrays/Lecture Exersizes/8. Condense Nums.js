function condense(input) {
    let count = input.length - 1;
    while (count >= 1) {
        for (let i = 0; i < count; i++) {
            let next = input[i + 1];
            input[i] += next;
        }
        count--;
    }
    console.log(input[0]);
}
condense([2, 10, 3]);