function triangle(input) {
    let num = Number(input);

    for (let i = 1; i <= num; i++) {
        let line = i + ' ';
        console.log(line.repeat(i));
    }
}
triangle(3);