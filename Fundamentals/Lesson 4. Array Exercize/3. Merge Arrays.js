function merge(array, array2) {
    let thirdArray = [];

    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            let sum = Number(array[index]) + Number(array2[index]);
            thirdArray.push(sum);
        } else {
            let concat = array[index] + array2[index];
            thirdArray.push(concat);
        }
    }
console.log(thirdArray.join(' - '));
}
merge(['5', '15', '23', '56', '36'], ['17', '22', '87', '36', '11']);