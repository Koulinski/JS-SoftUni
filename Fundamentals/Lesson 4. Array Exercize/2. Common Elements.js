function compare(array, array2) {

for (const element of array) {
    for (const second of array2) {
        if (element === second) {
            console.log(element);
        }
    }
}
}
compare(['Hey', 'hello', 2, 4, 'Petar', 'e'], ['Peter', 10, 'hey', 4, 'hello', '2']);