function magic(array, n) {
    for (let index = 0; index < array.length; index++) {
        for (let j = index + 1; j < array.length; j++) {
            let sum = array[index] + array[j];
            if (sum === n) {
                console.log(`${array[index]} ${array[j]}`);
            }
        }
    }
}
magic([1, 7, 6, 2, 19, 23], 8);