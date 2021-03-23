function multiplication(input) {
    let num = Number(input);

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}
multiplication(5);