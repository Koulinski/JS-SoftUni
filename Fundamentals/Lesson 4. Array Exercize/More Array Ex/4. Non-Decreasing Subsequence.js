function bigger(arr) {
        console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
    }


/* function bigger(array) {
    let max = array[0];
    let result = array.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
} */





/* function bigger(array) {
    let max = array[0];
    let big = [];
    big.push(max);
    for (let index = 0; index < array.length; index++) {
        let current = array[index];
        let newMax = max;
        if (current > max) {
            max = current;
            if (max > newMax) {
                big.push(max);
            }
        }
    }
    console.log(big.join(' '));
} */
//bigger([1, 2, 3, 4])
bigger([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//bigger([20, 3, 2, 15, 6, 1])