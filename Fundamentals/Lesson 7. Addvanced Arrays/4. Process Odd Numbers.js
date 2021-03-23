function process(input) {
    input = input.filter((num, index) => index % 2 !== 0)
    .map(num => num * 2)
    .reverse()
    .join(' ');
    return input
}
let result = process([3, 0, 10, 4, 7, 3]);
console.log(result);
