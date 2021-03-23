function addAndSubtract(x, y, z) {

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    return subtract(add(x, y), z);
}
let result = addAndSubtract(23, 6, 10);
console.log(result);