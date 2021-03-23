function raceDay(arr) {
    let party = {};
    arr.shift().split(', ').forEach(name => {
        party[name] = 0;
    });

    for (const line of arr) {
        let pat = /[A-Za-z]/g;
        let pat2 = /[\d]/g;

        let name = line.match(pat).join('');
        if (party.hasOwnProperty(name)) {
            let km = line.match(pat2).map(Number).reduce((x, b) => x + b);
            party[name] += km;
        }
    }
    let sorted = Object.keys(party).sort((a, b) => party[b] - party[a]);

    return `1st place: ${sorted[0]}
2nd place: ${sorted[1]}
3rd place: ${sorted[2]}`
}
console.log(
    raceDay(['George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ])
);