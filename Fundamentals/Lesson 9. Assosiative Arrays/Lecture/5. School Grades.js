function schoolGrades(arr) {
    let map = new Map();
    for (let el of arr) {
        let tokens = el.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (!map.has(name)) {
            map.set(name, []);
        }
        let existing = map.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    let sorted = Array.from(map).sort(compareAverage);

    for (let el of sorted) {
        console.log(`${el[0]}: ${el[1].join(', ')}`);
    }

    function compareAverage(a, b) {
        let avgA = 0;
        a[1].forEach(x => avgA += x);
        avgA /= a[1].length;

        let avgB = 0;
        b[1].forEach(x => avgB += x);
        avgB /= b[1].length;

        return avgA - avgB;
    }
}
schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);