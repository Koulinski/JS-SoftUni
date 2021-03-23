function printobjects(a) {
    let entries = Object.entries(a);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
printobjects()