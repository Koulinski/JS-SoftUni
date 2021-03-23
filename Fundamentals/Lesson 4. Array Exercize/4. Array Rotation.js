function rotation(array, n) {
    for (let index = 0; index < n; index++) {
        let element = array.shift();
        array.push(element);
    }
console.log(array.join(' '));
}
rotation([51, 47, 32, 61, 21], 2);