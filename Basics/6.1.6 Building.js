function wtf(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let floorstuff = '';
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                floorstuff += `L${i}${j} `;
            } else if (i % 2 === 0) {
                floorstuff += `O${i}${j} `;
            } else {
                floorstuff += `A${i}${j} `;
            }
        }
        console.log(floorstuff);
    }
}
wtf(['6', '4'])