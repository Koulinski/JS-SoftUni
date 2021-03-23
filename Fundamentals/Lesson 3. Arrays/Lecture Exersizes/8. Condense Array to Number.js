function condense(input) {
    let cond = [];
    while (input.length > 1) {
        for (let i = 0; i < input.length - 1; i++) {
            let current = input[i];
            let next = input[i + 1];
            cond.push(current + next);
        }
        input = cond;
        cond = [];
    }
console.log(input[0]);
}
condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);