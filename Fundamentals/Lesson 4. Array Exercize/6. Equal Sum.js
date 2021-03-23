function equalSum(array) {
    let isEqual = false;
    for (let index = 0; index < array.length; index++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = index + 1; j < array.length; j++) {
            rightSum += array[j];
        }
        for (let h = 0; h < index; h++) {
            leftSum += array[h];
        }
        if (leftSum === rightSum) {
            isEqual = true;
            console.log(index);
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
equalSum([1, 2, 3, 3])