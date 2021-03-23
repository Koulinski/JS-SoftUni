function max(array) {
    let topArray = [];
    for (let index = 0; index < array.length; index++) {
        let isTop = true;
        for (let j = index + 1; j < array.length; j++) {
            if (array[index] <= array[j]) {
                isTop = false;
                break;
            }

        }
        if (isTop) {
            topArray.push(array[index]);
        }
    }
console.log(topArray.join(' '));
}
max([1, 4, 3, 2]);