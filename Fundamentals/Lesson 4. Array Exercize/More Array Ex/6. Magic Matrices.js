function magicMatrices(array) {
    for (let index = 0; index < array.length - 1; index++) {
        let fsum = array[index].reduce((a, b) => a + b, 0);
        let ssum = array[index + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let i = 0; i < array.length; i++) {
            sumCOne += array[index][i];
            sumCTwo += array[index + 1][i];
        }
        if (fsum !== ssum || sumCOne !== sumCTwo) {
            return false;
        }
    }
    return true;
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);