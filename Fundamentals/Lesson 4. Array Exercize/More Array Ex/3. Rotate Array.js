function rotate(array) {
    let num = Number(array[array.length - 1]);
    array.pop(array[array.length - 1]);
    for (let i = 1; i <= num; i++) {
        let current = array.pop();
        array.unshift(current);
    }
    console.log(array.join(' '));
}
rotate(['1', '2', '3', '4', '2']);