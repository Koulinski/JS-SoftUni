function numsBy7(input) {
    let number = Number(input);

    for (let i=7; i<= number; i++) {
        if(i%10 ===7) {
            console.log(i);
        }
    }
}
numsBy7(1000)