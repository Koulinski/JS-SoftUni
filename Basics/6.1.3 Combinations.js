function combo(input) {
    let n = Number(input);
    let comboCounter =0;
    for (let i=0; i<=n; i++) {
        for (let j=0; j<=n; j++) {
            for (let u=0; u<=n; u++) {
                if(i+j+u === n) {
                comboCounter++;
                }
            }
        }
    }
    console.log(comboCounter);
}
combo(5)